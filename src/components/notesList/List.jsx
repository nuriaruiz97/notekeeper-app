import { useEffect } from "react";
import { Note } from "../note/Note";
import { handleGetAllNotes } from "../../helpers/handlers/handlers";
import PropTypes from "prop-types";

export const List = ({ notes, setNotes }) => {
  useEffect(() => {
    handleGetAllNotes(setNotes);
  }, [setNotes]);

  return (
    <>
      <ul>
        {notes.map((note, index) => (
          <Note note={note} key={index} setNotes={setNotes} />
        ))}
      </ul>
    </>
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
