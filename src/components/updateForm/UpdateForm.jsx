import PropTypes from "prop-types";
import { getAllNotes, updateNote } from "../../services/notes/notesServices";

export const UpdateForm = ({ setNotes, note, setForm }) => {
  const handleSubmit = (event) => {
    event.preventDefault();

    const updatedNote = {
      name: event.target.name.value,
      description: event.target.description.value,
      status: event.target.status.value,
      due_date: event.target.due_date.value,
    };

    updateNote(note.id, updatedNote)
      .then(() => getAllNotes())
      .then(({ notes }) => {
        setNotes(notes);
      })
      .then(() => {
        setForm(false);
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
      <h3>Update this note</h3>
      <form onSubmit={(event) => handleSubmit(event)}>
        <label htmlFor="name"></label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="name"
          defaultValue={note.name}
          required
        />
        <label htmlFor="description"></label>
        <input
          type="text"
          id="description"
          name="description"
          placeholder="description"
          defaultValue={note.description}
          required
        />
        <label htmlFor="status"></label>
        <select id="status" name="status" required defaultValue={note.status}>
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
          defaultValue={note.due_date}
          required
        />

        <button type="submit">Update Note</button>
      </form>
    </>
  );
};

UpdateForm.propTypes = {
  setNotes: PropTypes.func.isRequired,
  note: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    due_date: PropTypes.string.isRequired,
  }).isRequired,
  setForm: PropTypes.func.isRequired,
};
