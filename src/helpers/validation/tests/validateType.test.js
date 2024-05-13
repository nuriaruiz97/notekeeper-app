import { validateType } from "../validateType";
import { describe, test, expect } from "vitest";

describe("Given a validateType function", () => {
  describe("When it receives a note object with properties that match the expected data types", () => {
    test("Then it should return true", () => {
      const note = { title: "Title", status: "done" };
      const expectedTypes = { title: "string", status: "string" };
      const result = validateType(note, expectedTypes);
      expect(result).toBe(true);
    });
  });

  describe("When it receives a note object with properties that do not match the expected data types", () => {
    test("Then it should return false", () => {
      const note = { title: "Title", status: "done" };
      const expectedTypes = { title: "string", status: "number" };
      const result = validateType(note, expectedTypes);
      expect(result).toBe(false);
    });
  });
});
