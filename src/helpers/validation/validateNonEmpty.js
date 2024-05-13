/**
 * Validates that string properties of a note are not empty.
 * @param {object} note - The object to validate.
 * @param {string[]} stringProperties - An array of string property names to validate.
 * @returns {boolean} - True if all string properties of the note are not empty, false otherwise.
 */

export const validateNonEmpty = (note, stringProperties) => {
  for (let propertyName of stringProperties) {
    const propertyValue = note[propertyName];

    if (typeof propertyValue !== "string" || propertyValue === "") {
      return false;
    }
  }

  return true;
};
