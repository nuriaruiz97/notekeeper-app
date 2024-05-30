/**
 * Returns true if string properties have non-empty content, otherwise returns false
 * @param {object} note
 * @returns boolean
 */
export const validateNonEmpty = (note) => {
  if (
    note.id === "" ||
    note.name === "" ||
    note.description === "" ||
    note.status === "" ||
    note.due_date === ""
  ) {
    return false;
  }
  return true;
};
