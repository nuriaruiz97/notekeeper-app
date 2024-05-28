import { validateType } from "../validateType";
import { describe, test, expect } from "vitest";

describe("Given a validateType function", () => {
  describe("When it receives an object with properties that match the expected data types", () => {
    test("Then it should return true", () => {
      const note = {
        id: "123",
        name: "Title",
        description: "Description",
        status: "done",
        due_date: "2024-05-14",
        created_at: 1620987274141,
      };
      const result = validateType(note);
      expect(result).toBe(true);
    });
  });

  describe("When it receives an object with properties that do not match the expected data types", () => {
    test("Then it should return false", () => {
      const invalidNote = {
        id: 123,
        name: "Title",
        description: "Description",
        status: "done",
        due_date: "2024-05-14",
        created_at: "1620987274141", // Should be a number
      };
      const result = validateType(invalidNote);
      expect(result).toBe(false);
    });
  });
});
