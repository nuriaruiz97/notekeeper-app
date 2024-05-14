import { describe, test, expect } from "vitest";
import { validateNonEmpty } from "../validateNonEmpty";

describe("Given a validateNonEmpty function", () => {
  test("When it receives a note object with a title property that is not empty", () => {
    const note = { title: "Title" };
    const result = validateNonEmpty(note, ["title"]);
    expect(result).toBe(true);
  });
});
describe("Given a validateNonEmpty function", () => {
  test("When it receives a note object with a title property that is empty", () => {
    const note = { title: "" };
    const result = validateNonEmpty(note, ["title"]);
    expect(result).toBe(false);
  });
});
