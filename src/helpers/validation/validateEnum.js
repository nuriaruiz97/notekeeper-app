/**
 * Validates that the status property of a note object contains a value only from the predefined set of options.
 * @param {object} note - The note object to validate.
 * @returns {boolean} - True if the status property contains a value only from the predefined set of options, false otherwise.
 */

export const validateEnum = ({ note }) => {
  const allowedStatus = ["pending", "in progress", "done"];
  for (let status of allowedStatus) {
    if (note.status === status) {
      return true;
    }
  }
  return false;
};
