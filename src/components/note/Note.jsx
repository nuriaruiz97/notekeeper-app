import { handleDelete, handleUpdate } from "../../helpers/handlers/handlers";
import { useState } from "react";
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
