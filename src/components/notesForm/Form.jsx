import { getAllNotes, createNote } from "../../services/notes/notesServices.js";
import PropTypes from "prop-types";

export const Form = ({ setNotes }) => {
  const handleSubmit = (event) => {
    event.preventDefault();

    const newNote = {
      name: event.target.name.value,
      description: event.target.description.value,
      status: event.target.status.value,
      due_date: event.target.due_date.value,
    };

    createNote(newNote)
      .then(() => getAllNotes())
      .then(({ notes }) => {
        setNotes(notes);
      });
  };
  const Status = {
    Pending: "pending",
    In_progress: "in progress",
    Done: "done",
  };

  const statusOptions = Object.values(Status);

  return (
    <>
      <h1>Fill the form to create a new Note!</h1>

      <form onSubmit={(event) => handleSubmit(event)}>
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
        <select id="status" name="status" required>
          {statusOptions.map((Option, index) => (
            <option key={index} value={Option}>
              {Option}
            </option>
          ))}
        </select>
        <label htmlFor="due_date"></label>
        <input
          type="date"
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

Form.propTypes = {
  setNotes: PropTypes.func.isRequired,
};
