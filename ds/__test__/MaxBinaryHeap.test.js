import { describe, expect, test } from "@jest/globals";
import { MaxBinaryHeap } from "../MaxBinaryHeap";

describe("Max binary heap test", () => {
	test("Insert into a max binary heap", () => {
		let heap = new MaxBinaryHeap();

		expect(heap.insert(55)).toEqual({ values: [55] });
		expect(heap.insert(22)).toEqual({ values: [55, 22] });
		expect(heap.insert(30)).toEqual({ values: [55, 22, 30] });
		expect(heap.insert(40)).toEqual({ values: [55, 40, 30, 22] });
		expect(heap.insert(60)).toEqual({ values: [60, 55, 30, 22, 40] });
		expect(heap.insert(35)).toEqual({ values: [60, 55, 35, 22, 40, 30] });
	});
});
