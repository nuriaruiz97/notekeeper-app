import { validateType } from "../validateType.js";
import { describe, test, expect, it } from "vitest";

describe("Given a validateType function", () => {
  describe("When it receives a object with properties that match the expected data types", () => {
    test("Then it should return true", () => {
      const note = { title: "Title", status: "done" };
      const expectedTypes = { title: "string", status: "string" };
      const result = validateType(note, expectedTypes);
      expect(result).toBe(true);
    });
  });
  describe("When it receives a object with properties that do not match the expected data types", () => {
    test("Then it should return false", () => {
      const note = { title: "Title", status: "done" };
      const expectedTypes = { title: "string", status: "number" };
      const result = validateType(note, expectedTypes);
      expect(result).toBe(false);
    });
  });
});
describe("Given a validateType function", () => {
  describe("given type string", () => {
    it("should return true if the property is a string", () => {
      const note = { title: "Title" };

      const expectedTypes = { title: "string" };
      const result = validateType(note, expectedTypes);
      expect(result).toBe(true);
    });
    it("should return false if the property is not a string", () => {
      const note = { title: 1 };

      const expectedTypes = { title: "string" };
      const result = validateType(note, expectedTypes);
      expect(result).toBe(false);
    });
  });
  describe("given type number", () => {
    it("should return true if the property is a number", () => {
      const note = { id: 1 };

      const expectedTypes = { id: "number" };
      const result = validateType(note, expectedTypes);
      expect(result).toBe(true);
    });
    it("should return false if the property is not a number", () => {
      const note = { id: "1" };

      const expectedTypes = { id: "number" };
      const result = validateType(note, expectedTypes);
      expect(result).toBe(false);
    });
  });
  describe("given type boolean", () => {
    it("should return true if the property is a boolean", () => {
      const note = { isDone: true };

      const expectedTypes = { isDone: "boolean" };
      const result = validateType(note, expectedTypes);
      expect(result).toBe(true);
    });
    it("should return false if the property is not a boolean", () => {
      const note = { isDone: "true" };

      const expectedTypes = { isDone: "boolean" };
      const result = validateType(note, expectedTypes);
      expect(result).toBe(false);
    });
  });
});
