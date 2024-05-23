/**
 * If each note property is of the expected type, return true, otherwise return false
 * @param {object} note
 * @returns boolean
 */

export const validateType = (note) => {
  if (
    typeof note.id == "string" &&
    typeof note.name == "string" &&
    typeof note.description == "string" &&
    typeof note.status == "string" &&
    typeof note.important == "boolean" &&
    typeof note.due_date == "date" &&
    typeof note.created_at == "number"
  ) {
    return true;
  }
  return false;
};
