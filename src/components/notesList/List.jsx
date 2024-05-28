import { useEffect } from "react";
import { Note } from "../note/Note";
import { handleGetAllNotes } from "../../helpers/handlers/handlers";

export const List = ({ notes, setNotes }) => {
  useEffect(() => {
    handleGetAllNotes(setNotes);
  }, []);

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
