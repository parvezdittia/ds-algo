import { Node, Queue } from "../Queue";
import { describe, test, expect } from "@jest/globals";

describe("Node Test", () => {
	test("Create Node", () => {
		const node = new Node(1);
		expect(node.value).toBe(1);
		expect(node.next).toBeNull();
	});

	test("Create Node with objects", () => {
		const node = new Node({ x: 1, y: "hello world" });
		expect(node.value.x).toBe(1);
		expect(node.value.y).toEqual("hello world");
		expect(node.value.z).toBeUndefined();
		expect(node.next).toBeNull();
	});

	test("Create node with arrays", () => {
		const node = new Node(["a", "b", "c"]);
		expect(node.value[0]).toBe("a");
		expect(node.value[1]).toBe("b");
		expect(node.value[2]).toBe("c");
		expect(node.next).toBeNull();
	});
});

describe("Stack Test", () => {
	test("Enqueue a queue", () => {
		const queue = new Queue();

		queue.enqueue("a");
		queue.enqueue("b");
		queue.enqueue("c");
		queue.enqueue("d");
		queue.enqueue("e");

		expect(queue.length).toBe(5);
		expect(queue.dequeue()).toBe("a");
		expect(queue.length).toBe(4);
		expect(queue.dequeue()).toBe("b");
		expect(queue.length).toBe(3);
		expect(queue.dequeue()).toBe("c");
		expect(queue.length).toBe(2);
		expect(queue.dequeue()).toBe("d");
		expect(queue.length).toBe(1);
		expect(queue.dequeue()).toBe("e");
		expect(queue.length).toBe(0);
		expect(queue.dequeue()).toBeUndefined();
		expect(queue.length).toBe(0);
		expect(queue.dequeue()).toBeUndefined();
		expect(queue).toEqual({
			first: null,
			last: null,
			length: 0,
		});
	});

	test("Dequeue to a queue", () => {
		const queue = new Queue();

		expect(queue.enqueue("a")).toBe(1);
		expect(queue.enqueue("b")).toBe(2);
		expect(queue.enqueue("c")).toBe(3);
		expect(queue.enqueue("d")).toBe(4);
		expect(queue.enqueue("e")).toBe(5);

		expect(queue).toMatchObject({
			first: {
				value: "a",
				next: {
					value: "b",
					next: {
						value: "c",
						next: {
							value: "d",
							next: {
								value: "e",
								next: null,
							},
						},
					},
				},
			},
			last: {
				value: "e",
				next: null,
			},
			length: 5,
		});
	});
});
