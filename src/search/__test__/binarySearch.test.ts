import { describe, expect, test } from "@jest/globals";
import { binarySearch } from "../binarySearch";

describe("Binary Search Test", () => {
	test("Number search", () => {
		let arr = [2, 4, 6, 12, 23, 45, 56];

		const fn = (value: number) => {
			const searchValue = value;
			return (middle: number) => {
				if (arr[middle] === searchValue) {
					return 0;
				} else if (arr[middle] < searchValue) {
					return 1;
				} else {
					return -1;
				}
			};
		};

		expect(binarySearch(arr, fn(45))).toBe(5);
		expect(binarySearch(arr, fn(2))).toBe(0);
		expect(binarySearch(arr, fn(56))).toBe(6);
		expect(binarySearch(arr, fn(7))).toBe(-1);

		arr = [2];

		expect(binarySearch(arr, fn(2))).toBe(0);

		arr = [2, 7];

		expect(binarySearch(arr, fn(2))).toBe(0);
		expect(binarySearch(arr, fn(7))).toBe(1);
		expect(binarySearch(arr, fn(5))).toBe(-1);
	});

	test("Count zeroes", () => {
		let arr = [1, 1, 1, 1, 0, 0];

		const fn = (middle: number) => {
			const middleValue = arr[middle];
			const leftOfMiddleValue =
				arr[middle - 1] !== undefined ? arr[middle - 1] : 1;
			const rightOfMiddleValue =
				arr[middle + 1] !== undefined ? arr[middle + 1] : 0;

			if (middleValue === 0) {
				if (leftOfMiddleValue === 1 && rightOfMiddleValue === 0) {
					return 0;
				} else {
					return -1;
				}
			} else {
				return 1;
			}
		};

		expect(binarySearch(arr, fn)).toBe(4);

		arr = [1, 0, 0, 0];

		expect(binarySearch(arr, fn)).toBe(1);

		arr = [0, 0, 0, 0];

		expect(binarySearch(arr, fn)).toBe(0);

		arr = [1, 1, 1, 1, 1];

		expect(binarySearch(arr, fn)).toBe(-1);

		arr = [1, 1, 1, 1, 0];

		expect(binarySearch(arr, fn)).toBe(4);
	});
});
