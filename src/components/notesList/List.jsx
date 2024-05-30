import { useEffect } from "react";
import { Note } from "../note/Note";
import { handleGetAllNotes } from "../../helpers/handlers/handlers";
import PropTypes from "prop-types";
import styled from "styled-components";

const ListContainer = styled.div`
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 800px;
  margin: 20px auto;
`;

const StyledList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

export const List = ({ notes, setNotes }) => {
  useEffect(() => {
    handleGetAllNotes(setNotes);
  }, [setNotes]);

  return (
    <ListContainer>
      <StyledList>
        {notes.map((note, index) => (
          <Note note={note} key={index} setNotes={setNotes} />
        ))}
      </StyledList>
    </ListContainer>
  );
};

List.propTypes = {
  notes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      status: PropTypes.string.isRequired,
      due_date: PropTypes.string.isRequired,
    })
  ).isRequired,
  setNotes: PropTypes.func.isRequired,
};

export default List;
