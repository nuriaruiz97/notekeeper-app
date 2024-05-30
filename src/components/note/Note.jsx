import { useState } from "react";
import PropTypes from "prop-types";
import { handleDelete } from "../../helpers/handlers/handlers";
import { UpdateForm } from "../updateForm/UpdateForm";

export const Note = ({ note, setNotes }) => {
  const [showForm, setForm] = useState(false);

  return (
    <>
      {!showForm ? (
        <li>
          {note.id} | {note.name} | {note.description} | {note.status} |{" "}
          {note.due_date}
          <button onClick={() => handleDelete(note.id, setNotes)}>
            Delete
          </button>
          <button onClick={() => setForm(true)}>Update</button>
        </li>
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
