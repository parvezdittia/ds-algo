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

	test("Pop from a DLL", () => {
		const list = new DoublyLinkedList();

		list.push("a");
		list.push("b");
		list.push("c");
		list.push("d");
		list.push("e");

		expect(list.pop()).toBe("e");
		expect(list.pop()).toBe("d");
		expect(list.pop()).toBe("c");
		expect(list.pop()).toBe("b");
		expect(list.pop()).toBe("a");
		expect(list.pop()).toBeUndefined();
		expect(list.pop()).toBeUndefined();
	});

	test("Shift a DLL", () => {
		const list = new DoublyLinkedList();

		expect(list.shift()).toBeUndefined();
		expect(list).toMatchObject({
			head: null,
		});

		list.push("x");
		expect(list).toMatchObject({
			head: {
				value: "x",
				previous: null,
				next: null,
			},
		});
		expect(list.shift()).toBe("x");
		expect(list).toMatchObject({
			head: null,
		});

		list.push("x");
		list.push("y");
		expect(list.shift()).toBe("x");
		expect(list).toMatchObject({
			head: {
				value: "y",
				previous: null,
				next: null,
			},
		});
		expect(list.shift()).toBe("y");
		expect(list).toMatchObject({
			head: null,
		});
	});

	test("Unshift a doubly linked list", () => {
		const list = new DoublyLinkedList();

		expect(list.unshift("a")).toBe("a");
		expect(list).toMatchObject({
			head: {
				value: "a",
				previous: null,
				next: null,
			},
		});

		expect(list.unshift("b")).toBe("b");
		expect(list.head.value).toBe("b");
		expect(list.head.previous).toBeNull();
		expect(list.head.next.value).toBe("a");
		expect(list.head.next.previous).toBe(list.head);
		expect(list.head.next.next).toBeNull();
	});

	test("Get data at an index", () => {
		const list = new DoublyLinkedList();
		expect(list.get(0)).toBeUndefined();
		expect(list.get(1)).toBeUndefined();
		expect(list.get(10)).toBeUndefined();

		list.push("a");
		list.push("b");
		list.push("c");
		list.push("d");

		expect(list.get(-1)).toBeUndefined();
		expect(list.get(0)).toBe("a");
		expect(list.get(2)).toBe("c");
		expect(list.get(3)).toBe("d");
		expect(list.get(4)).toBeUndefined();
	});

	test("Set data at an index", () => {
		const list = new DoublyLinkedList();
		expect(list.set(0, "x")).toBeUndefined();
		expect(list.set(1, "x")).toBeUndefined();
		expect(list.set(10, "x")).toBeUndefined();

		list.push("a");
		list.push("b");
		list.push("c");
		expect(list.set(-1, "x")).toBeUndefined();
		expect(list.set(1, "x")).toBe("x");
		expect(list.get(0)).toBe("a");
		expect(list.get(1)).toBe("x");
		expect(list.get(2)).toBe("c");
		expect(list.set(3, "y")).toBeUndefined();
	});

	test("Insert data at a given index", () => {
		const list = new DoublyLinkedList();

		list.insert(-1, "a");
		expect(list.head.value).toBe("a");
		expect(list.head.next).toBeNull();
		expect(list.head.previous).toBeNull();

		list.insert(-10, "b");
		expect(list.head.value).toBe("b");
		expect(list.head.previous).toBeNull();
		expect(list.head.next.value).toBe("a");
		expect(list.head.next.next).toBeNull();
		expect(list.head.next.previous).toBe(list.head);

		list.insert(2, "c");
		let node = list.head.next.next;
		expect(node.value).toBe("c");
		expect(node.next).toBeNull();
		expect(node.previous.value).toBe("a");
		expect(node.previous.next).toBe(node);

		list.insert(20, "d");
		node = list.head.next.next.next;
		expect(node.value).toBe("d");
		expect(node.next).toBeNull();
		expect(node.previous.value).toBe("c");
		expect(node.previous.next).toBe(node);

		list.insert(2, "x");
		node = list.head.next.next;
		expect(node.value).toBe("x");
		expect(node.next.value).toBe("c");
		expect(node.previous.value).toBe("a");
		expect(node.previous.next).toBe(node);
		expect(node.next.previous).toBe(node);
	});

	test("Delete data at a given index", () => {
		const list = new DoublyLinkedList();

		list.delete(-1);
		expect(list).toMatchObject({
			head: null,
		});

		list.delete(10);
		expect(list).toMatchObject({
			head: null,
		});

		list.push("a");
		list.delete(0);
		expect(list).toMatchObject({
			head: null,
		});

		list.push("a");
		list.push("b");
		list.delete(1);
		expect(list).toMatchObject({
			head: {
				value: "a",
				previous: null,
				next: null,
			},
		});

		list.push("b");
		list.delete(2);
		expect(list.head.value).toBe("a");
		expect(list.head.previous).toBeNull();
		expect(list.head.next.value).toBe("b");
		expect(list.head.next.next).toBeNull();
		expect(list.head.next.previous.value).toBe("a");
		expect(list.head.next.previous).toBe(list.head);

		list.push("c");
		list.delete(1);
		expect(list.head.value).toBe("a");
		expect(list.head.next.value).toBe("c");
		expect(list.head.next.next).toBeNull;
		expect(list.head.next.previous.value).toBe("a");
	});
});
