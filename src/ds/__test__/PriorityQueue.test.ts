import { describe, test, expect } from "@jest/globals";
import { PriorityQueue } from "../PriorityQueue";

describe("Priority Queue Test", () => {
	test("Priority Queue Creation", () => {
		const queue = new PriorityQueue();
		expect(queue).toEqual({ values: [] });
	});

	test("Enqueue", () => {
		const queue = new PriorityQueue();
		expect(queue.enqueue("a", 55)).toEqual({
			values: [{ value: "a", priority: 55 }],
		});
		expect(queue.enqueue("b", 22)).toEqual({
			values: [
				{ value: "b", priority: 22 },
				{ value: "a", priority: 55 },
			],
		});
		expect(queue.enqueue("c", 30)).toEqual({
			values: [
				{ value: "b", priority: 22 },
				{ value: "a", priority: 55 },
				{ value: "c", priority: 30 },
			],
		});
		expect(queue.enqueue("d", 40)).toEqual({
			values: [
				{ value: "b", priority: 22 },
				{ value: "d", priority: 40 },
				{ value: "c", priority: 30 },
				{ value: "a", priority: 55 },
			],
		});
		expect(queue.enqueue("e", 60)).toEqual({
			values: [
				{ value: "b", priority: 22 },
				{ value: "d", priority: 40 },
				{ value: "c", priority: 30 },
				{ value: "a", priority: 55 },
				{ value: "e", priority: 60 },
			],
		});
		expect(queue.enqueue("f", 35)).toEqual({
			values: [
				{ value: "b", priority: 22 },
				{ value: "d", priority: 40 },
				{ value: "c", priority: 30 },
				{ value: "a", priority: 55 },
				{ value: "e", priority: 60 },
				{ value: "f", priority: 35 },
			],
		});
	});

	test("Dequeue", () => {
		const queue = new PriorityQueue();

		queue
			.enqueue("a", 55)
			.enqueue("b", 22)
			.enqueue("c", 30)
			.enqueue("d", 40)
			.enqueue("e", 60)
			.enqueue("f", 35);

		expect(queue).toEqual({
			values: [
				{ value: "b", priority: 22 },
				{ value: "d", priority: 40 },
				{ value: "c", priority: 30 },
				{ value: "a", priority: 55 },
				{ value: "e", priority: 60 },
				{ value: "f", priority: 35 },
			],
		});

		expect(queue.dequeue()).toEqual({ value: "b", priority: 22 });
		expect(queue).toEqual({
			values: [
				{ value: "c", priority: 30 },
				{ value: "d", priority: 40 },
				{ value: "f", priority: 35 },
				{ value: "a", priority: 55 },
				{ value: "e", priority: 60 },
			],
		});

		expect(queue.dequeue()).toEqual({ value: "c", priority: 30 });
		expect(queue).toEqual({
			values: [
				{ value: "f", priority: 35 },
				{ value: "d", priority: 40 },
				{ value: "e", priority: 60 },
				{ value: "a", priority: 55 },
			],
		});

		expect(queue.dequeue()).toEqual({ value: "f", priority: 35 });
		expect(queue).toEqual({
			values: [
				{ value: "d", priority: 40 },
				{ value: "a", priority: 55 },
				{ value: "e", priority: 60 },
			],
		});

		expect(queue.dequeue()).toEqual({ value: "d", priority: 40 });
		expect(queue).toEqual({
			values: [
				{ value: "a", priority: 55 },
				{ value: "e", priority: 60 },
			],
		});

		expect(queue.dequeue()).toEqual({ value: "a", priority: 55 });
		expect(queue).toEqual({
			values: [{ value: "e", priority: 60 }],
		});

		expect(queue.dequeue()).toEqual({ value: "e", priority: 60 });
		expect(queue).toEqual({
			values: [],
		});

		expect(queue.dequeue()).toBeUndefined();
		expect(queue).toEqual({
			values: [],
		});
	});
});
