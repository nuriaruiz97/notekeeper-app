import { useEffect, useState } from "react";
import {
  getAllNotes,
  createNote,
    // deleteNote,
    // updateNote,
} from "../../services/notes/notesServices.js";

export const Form = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    getAllNotes().then((notes) => {
      setNotes(notes);
    });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    const newNote = {
      id: event.target.id.value,
      name: event.target.name.value,
      description: event.target.description.value,
      status: event.target.status.value,
      due_date: event.target.due_date.value,
    };
    createNote(newNote)
      .then(() => getAllNotes())
      .then((notes) => {
        setNotes(notes);
      });
  };

  return (
    <>
      <h1>Fill the form to create a new Note!</h1>

      <form onSubmit={(event) => handleSubmit(event)}>
        <label htmlFor="id"></label>
        <input type="text" id="id" name="id" placeholder="id" required />
        <label htmlFor="name"></label>
        <input type="text" id="name" name="name" placeholder="name" required />
        <label htmlFor="description"></label>
        <input
          type="text"
          id="description"
          name="description"
          placeholder="description"
          required
        />
        <label htmlFor="status"></label>
        <input
          type="text"
          id="status"
          name="status"
          placeholder="status"
          required
        />
        <label htmlFor="due_date"></label>
        <input
          type="text"
          id="due_date"
          name="due_date"
          placeholder="due_date"
          required
        />

        <button type="submit">Create Note</button>
      </form>
    </>
  );
};
