import { expect, test } from "vitest";
import { flushInPlace } from "../lib/index.js";

test("it should work", () => {
  const arr = [1, 2, null, 5, undefined, 6];
  expect(flushInPlace(arr)).toEqual([1, 2, 5, 6]);
  expect(arr).toEqual([1, 2, 5, 6]);
});
