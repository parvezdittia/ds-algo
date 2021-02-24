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
});
