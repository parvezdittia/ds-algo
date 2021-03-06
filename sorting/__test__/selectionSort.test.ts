import { selectionSort } from "../selectionSort";
import { describe, test, expect } from "@jest/globals";

describe("Selection Sort Test", () => {
	test("Positive number array test", () => {
		const arr = [4, 20, 12, 10, 7, 9];
		expect(selectionSort(arr)).toEqual([4, 7, 9, 10, 12, 20]);
	});

	test("Integer array test", () => {
		const arr = [0, -10, 7, 4];
		expect(selectionSort(arr)).toEqual([-10, 0, 4, 7]);
	});

	test("Already sorted array", () => {
		const arr = [1, 2, 3];
		expect(selectionSort(arr)).toEqual([1, 2, 3]);
	});

	test("Empty array", () => {
		const arr: never[] = [];
		expect(selectionSort(arr)).toEqual([]);
	});

	test("Array of strings", () => {
		const arr = ["c", "a", "b", "l", "q", "r", "q", "z", "e"];
		expect(selectionSort(arr)).toEqual([
			"a",
			"b",
			"c",
			"e",
			"l",
			"q",
			"q",
			"r",
			"z",
		]);
	});

	test("Array of objects", () => {
		interface Person {
			name: string;
			age: number;
		}

		const arr: Array<Person> = [
			{ name: "tom", age: 27 },
			{ name: "dick", age: 25 },
			{ name: "harry", age: 30 },
		];
		const comp = (a: Person, b: Person) => {
			return a.age - b.age;
		};
		expect(selectionSort(arr, comp)).toEqual([
			{ name: "dick", age: 25 },
			{ name: "tom", age: 27 },
			{ name: "harry", age: 30 },
		]);
	});
});
