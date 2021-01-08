import { DoublyLinkedList, Node } from "../DoublyLinkedList";
import { describe, expect, test } from "@jest/globals";

describe("Node Test", () => {
	test("Create Node", () => {
		const node = new Node(1);
		expect(node.value).toBe(1);
		expect(node.next).toBeNull();
		expect(node.previous).toBeNull();
	});

	test("Create Node with objects", () => {
		const node = new Node({ x: 1, y: "hello world" });
		expect(node.value.x).toBe(1);
		expect(node.value.y).toEqual("hello world");
		expect(node.value.z).toBeUndefined();
		expect(node.next).toBeNull();
		expect(node.previous).toBeNull();
	});

	test("Create node with arrays", () => {
		const node = new Node(["a", "b", "c"]);
		expect(node.value[0]).toBe("a");
		expect(node.value[1]).toBe("b");
		expect(node.value[2]).toBe("c");
		expect(node.next).toBeNull();
		expect(node.previous).toBeNull();
	});
});

describe("Doubly Linked List Test", () => {
	test("Creation of an DLL", () => {
		const list = new DoublyLinkedList();
		expect(list).toMatchObject({
			head: null,
		});
	});

	test("Push to DLL", () => {
		const list = new DoublyLinkedList();

		expect(list.push("a")).toBe(1);
		expect(list).toMatchObject({
			head: {
				value: "a",
				previous: null,
				next: null,
			},
		});

		expect(list.push("b")).toBe(2);
		expect(list.head.previous).toBeNull();
		expect(list.head.value).toBe("a");
		expect(list.head.next.value).toBe("b");
		expect(list.head.next.previous).toBe(list.head);
		expect(list.head.next.next).toBeNull();
	});
});
