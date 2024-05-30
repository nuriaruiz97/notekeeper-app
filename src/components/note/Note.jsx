import { useState } from "react";
import PropTypes from "prop-types";
import { handleDelete } from "../../helpers/handlers/handlers";
import { UpdateForm } from "../updateForm/UpdateForm";
import styled from "styled-components";

const NoteContainer = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #f9f9f9;
  padding: 10px;
  margin: 10px 0;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const NoteDetails = styled.span`
  flex-grow: 1;
  margin-right: 10px;
  display: flex;
  flex-direction: column;
  font-size: 14px;
  line-height: 1.5;

  span {
    font-weight: bold;
  }
`;

const Button = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 3px;
  padding: 5px 10px;
  margin-left: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }

  &:first-of-type {
    background-color: #dc3545;

    &:hover {
      background-color: #c82333;
    }
  }
`;

export const Note = ({ note, setNotes }) => {
  const [showForm, setForm] = useState(false);

  return (
    <>
      {!showForm ? (
        <NoteContainer>
          <NoteDetails>
            <span>ID:</span> {note.id} <span>Name:</span> {note.name} <span>Description:</span> {note.description} <span>Status:</span> {note.status} <span>Due Date:</span> {note.due_date}
          </NoteDetails>
          <Button onClick={() => handleDelete(note.id, setNotes)}>Delete</Button>
          <Button onClick={() => setForm(true)}>Update</Button>
        </NoteContainer>
      ) : (
        <UpdateForm setNotes={setNotes} note={note} setForm={setForm} />
      )}
    </>
  );
};

Note.propTypes = {
  note: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    due_date: PropTypes.string.isRequired,
  }).isRequired,
  setNotes: PropTypes.func.isRequired,
};
