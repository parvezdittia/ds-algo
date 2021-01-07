import { Node } from "../DoublyLinkedList";
import { describe, expect, test } from "@jest/globals";

describe("Node Test", () => {
	test("Create Node", () => {
		const node = new Node(1);
		expect(node.val).toBe(1);
		expect(node.next).toBeNull();
		expect(node.previous).toBeNull();
	});

	test("Create Node with objects", () => {
		const node = new Node({ x: 1, y: "hello world" });
		expect(node.val.x).toBe(1);
		expect(node.val.y).toEqual("hello world");
		expect(node.val.z).toBeUndefined();
		expect(node.next).toBeNull();
		expect(node.previous).toBeNull();
	});

	test("Create node with arrays", () => {
		const node = new Node(["a", "b", "c"]);
		expect(node.val[0]).toBe("a");
		expect(node.val[1]).toBe("b");
		expect(node.val[2]).toBe("c");
		expect(node.next).toBeNull();
		expect(node.previous).toBeNull();
	});
});
