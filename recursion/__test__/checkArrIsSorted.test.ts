import checkArrayIsSorted from "../checkArrayIsSorted";
import { describe, test, expect } from "@jest/globals";

describe("Check array is sorted", () => {
	test("Test if array of numbers is sorted in ascending/descending  order", () => {
		const ascending = (a: number, b: number) => a >= b;
		expect(checkArrayIsSorted([1, 2, 3, 4, 5], ascending)).toBe(true);
		expect(checkArrayIsSorted([1, 4, 6, 10, 12], ascending)).toBe(true);
		expect(checkArrayIsSorted([1, 4, 6, 10, 10, 10, 20], ascending)).toBe(true);
		expect(checkArrayIsSorted([3, 2, 1], ascending)).toBe(false);
		expect(checkArrayIsSorted([1, 4, 6, 10, 0], ascending)).toBe(false);
		expect(checkArrayIsSorted([1, 4, -1, 10, 0], ascending)).toBe(false);

		const descending = (a: number, b: number) => a <= b;
		expect(checkArrayIsSorted([1, 2, 3, 4, 5], descending)).toBe(false);
		expect(checkArrayIsSorted([1, 4, 6, 10, 12], descending)).toBe(false);
		expect(checkArrayIsSorted([1, 4, 6, 10, 10, 10, 20], descending)).toBe(
			false
		);
		expect(checkArrayIsSorted([3, 2, 1], descending)).toBe(true);
		expect(checkArrayIsSorted([21, 14, 6, 1, 1], descending)).toBe(true);
		expect(checkArrayIsSorted([100, 40, 21, 10, -10], descending)).toBe(true);
	});

	test("Test if array of strings is sorted in ascending/descending  order", () => {
		const ascending = (a: string, b: string) => a >= b;
		expect(checkArrayIsSorted(["a", "b", "c"], ascending)).toBe(true);
		expect(checkArrayIsSorted(["bat", "cat", "rat"], ascending)).toBe(true);
		expect(checkArrayIsSorted(["bat", "cat", "cat", "rat"], ascending)).toBe(
			true
		);
		expect(checkArrayIsSorted(["rat", "cat", "bat"], ascending)).toBe(false);
		expect(checkArrayIsSorted(["bat", "cat", "rat", "pat"], ascending)).toBe(
			false
		);
		expect(checkArrayIsSorted(["bat", "cat", "sat", "rat"], ascending)).toBe(
			false
		);

		const descending = (a: string, b: string) => a <= b;
		expect(checkArrayIsSorted(["a", "b", "c"], descending)).toBe(false);
		expect(checkArrayIsSorted(["bat", "cat", "rat"], descending)).toBe(false);
		expect(checkArrayIsSorted(["bat", "cat", "cat", "rat"], descending)).toBe(
			false
		);
		expect(checkArrayIsSorted(["rat", "cat", "bat"], descending)).toBe(true);
		expect(checkArrayIsSorted(["bat", "cat", "rat", "pat"], descending)).toBe(
			false
		);
		expect(checkArrayIsSorted(["sat", "rat", "cat", "bat"], descending)).toBe(
			true
		);
	});
});
