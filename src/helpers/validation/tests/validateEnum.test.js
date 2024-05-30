import { validateEnum } from "../validateEnum.js";
import { describe, test, expect } from "vitest";

describe("Given a validateEnum function", () => {
  describe("When it receives a note object with a status property that contains a value from the predefined set of options", () => {
    test("Then it should return true", () => {
      const note = {
        name: "Walk the dog",
        description: "Go to the park",
        important: false,
        status: "pending",
        due_date: "5/23/2024"
      };
      const result = validateEnum(note);
      expect(result).toBe(true);
    });
  });

  describe("When it receives a note object with a status property that does not contain a value from the predefined set of options", () => {
    test("Then it should return false", () => {
      const note = {
        name: "Walk the dog",
        description: "Go to the park",
        important: false,
        status: "hola",
        due_date: "5/23/2024",
      };
      const result = validateEnum(note);
      expect(result).toBe(false);
    });
  });
});
