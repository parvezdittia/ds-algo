import { Node, Stack } from "../Stack";
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
	test("Pop a stack", () => {
		const stack = new Stack();

		stack.push("a");
		stack.push("b");
		stack.push("c");
		stack.push("d");
		stack.push("e");

		expect(stack.length).toBe(5);
		expect(stack.pop()).toBe("e");
		expect(stack.length).toBe(4);
		expect(stack.pop()).toBe("d");
		expect(stack.length).toBe(3);
		expect(stack.pop()).toBe("c");
		expect(stack.length).toBe(2);
		expect(stack.pop()).toBe("b");
		expect(stack.length).toBe(1);
		expect(stack.pop()).toBe("a");
		expect(stack.length).toBe(0);
		expect(stack.pop()).toBeUndefined();
		expect(stack.length).toBe(0);
		expect(stack.pop()).toBeUndefined();
		expect(stack).toEqual({
			top: null,
			length: 0,
		});
	});

	test("Push to a stack", () => {
		const stack = new Stack();

		expect(stack.push("a")).toBe(1);
		expect(stack.push("b")).toBe(2);
		expect(stack.push("c")).toBe(3);
		expect(stack.push("d")).toBe(4);
		expect(stack.push("e")).toBe(5);

		expect(stack).toEqual({
			top: {
				value: "e",
				next: {
					value: "d",
					next: {
						value: "c",
						next: {
							value: "b",
							next: {
								value: "a",
								next: null,
							},
						},
					},
				},
			},
			length: 5,
		});
	});
});
