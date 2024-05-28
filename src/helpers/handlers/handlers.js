import { validateType } from "../validation/validateType";
import { validateEnum } from "../validation/validateEnum";
import { validateNonEmpty } from "../validation/validateNonEmpty";
import { getAllNotes } from "../../services/notes/notesServices";
import { deleteNote, updateNote } from "../../services/notes/notesServices";

export const handleValidateNote = (note) => {
  if (
    validateType({ note }) &&
    validateEnum({ note }) &&
    validateNonEmpty({ note })
  )
    return true;
  else {
    return false;
  }
};

export const handleDelete = (id, setNotes) => {
  deleteNote(id)
    .then(() => getAllNotes())
    .then(({ notes }) => setNotes(notes))
    .catch((error) => console.error("Error deleting note:", error));
};

export const handleUpdate = (id, setNotes) => {
  updateNote(id)
    .then(() => getAllNotes())
    .then(({ notes }) => setNotes(notes))
    .catch((error) => console.error("Error updating note:", error));
};

export const handleGetAllNotes = (setNotes) => {
  getAllNotes()
    .then(({ notes }) => setNotes(notes))
    .catch((error) => console.error("Error fetching notes:", error));
};
