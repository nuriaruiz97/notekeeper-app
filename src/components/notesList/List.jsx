import { useEffect } from "react";
import { getAllNotes, deleteNote } from "../../services/notes/notesServices.js";

export const List = ({ notes, setNotes }) => {
  const handleGetAllNotes = () => {
    getAllNotes()
      .then(({ notes }) => setNotes(notes))
      .catch((error) => console.error("Error fetching notes:", error));
  };

  useEffect(() => {
    handleGetAllNotes();
  }, []);

  const handleDelete = (id) => {
    deleteNote(id)
      .then(() => getAllNotes())
      .then(({ notes }) => setNotes(notes))
      .catch((error) => console.error("Error deleting note:", error));
  };
  return (
    <>
      <ul>
        {notes.map((note, index) => (
          <li key={index}>
            {note.id} |{note.name} | {note.description} | {note.status} |
            {note.due_date}
            <button onClick={() => handleDelete(note.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
};
