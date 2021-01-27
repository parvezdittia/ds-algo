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

	test("Extract maximum value from a heap", () => {
		let heap = new MaxBinaryHeap();

		heap.insert(55).insert(22).insert(30).insert(40).insert(60).insert(35);
		expect(heap).toEqual({ values: [60, 55, 35, 22, 40, 30] });

		expect(heap.extractMax()).toBe(60);
		expect(heap).toEqual({ values: [55, 40, 35, 22, 30] });

		expect(heap.extractMax()).toBe(55);
		expect(heap).toEqual({ values: [40, 30, 35, 22] });

		expect(heap.extractMax()).toBe(40);
		expect(heap).toEqual({ values: [35, 30, 22] });

		expect(heap.extractMax()).toBe(35);
		expect(heap).toEqual({ values: [30, 22] });

		expect(heap.extractMax()).toBe(30);
		expect(heap).toEqual({ values: [22] });

		expect(heap.extractMax()).toBe(22);
		expect(heap).toEqual({ values: [] });

		expect(heap.extractMax()).toBeUndefined();
		expect(heap).toEqual({ values: [] });
	});
});
