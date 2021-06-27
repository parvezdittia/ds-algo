import checkArrayIsSorted from "../checkArrayIsSorted";
import { describe, test, expect } from "@jest/globals";

describe("Check array is sorted", () => {
	test("Test if array of numbers is sorted in ascending order", () => {
		expect(checkArrayIsSorted([1, 2, 3, 4, 5])).toBe(true);
		expect(checkArrayIsSorted([3, 2, 1])).toBe(false);
	});
});
