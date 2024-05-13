/**
 * Validates the data types of properties in a note object.
 * @param {object} note - The object to validate.
 * @param {object} expectedTypes - Specifying the expected data types for each property.
 * @returns {boolean} - True if all properties match their expected types, false otherwise.
 */

export const validateType = (note, expectedTypes) => {
  const typeMatches = Object.keys(expectedTypes).map((key) => {
    return note.hasOwnProperty(key) && typeof note[key] === expectedTypes[key];
  });
  return typeMatches.every((match) => match === true);
};
