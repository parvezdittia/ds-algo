import { Node, SinglyLinkedList } from "../SinglyLinkedList.js";
import { describe, expect, test } from "@jest/globals";

describe("Node Test", () => {
	test("Create Node", () => {
		const node = new Node(1);
		expect(node.val).toBe(1);
		expect(node.next).toBeNull();
	});

	test("Create Node with objects", () => {
		const node = new Node({ x: 1, y: "hello world" });
		expect(node.val.x).toBe(1);
		expect(node.val.y).toEqual("hello world");
		expect(node.val.z).toBeUndefined();
		expect(node.next).toBeNull();
	});

	test("Create node with arrays", () => {
		const node = new Node(["a", "b", "c"]);
		expect(node.val[0]).toBe("a");
		expect(node.val[1]).toBe("b");
		expect(node.val[2]).toBe("c");
		expect(node.next).toBeNull();
	});
});

describe("Linked List Test", () => {
	test("Creation of an empty list", () => {
		const list = new SinglyLinkedList();
		expect(list.head).toBeNull();
	});

	test("Push to linked list", () => {
		const list1 = new SinglyLinkedList();

		expect(list1.push("a")).toBe(1);
		expect(list1).toEqual({ head: { val: "a", next: null } });

		const list2 = new SinglyLinkedList();
		list2.push("a");

		expect(list2.push("b")).toBe(2);
		expect(list2).toEqual({
			head: { val: "a", next: { val: "b", next: null } },
		});
	});

	test("Pop from a linked list", () => {
		const list = new SinglyLinkedList();

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

	test("Shift a linked list", () => {
		const list = new SinglyLinkedList();

		list.push("a");
		list.push("b");
		list.push("c");
		list.push("d");
		list.push("e");

		expect(list.shift()).toBe("a");
		expect(list.shift()).toBe("b");
		expect(list.shift()).toBe("c");
		expect(list.shift()).toBe("d");
		expect(list.shift()).toBe("e");
		expect(list.shift()).toBeUndefined();
		expect(list.shift()).toBeUndefined();
	});

	test("Unshift a linked list", () => {
		const list = new SinglyLinkedList();

		expect(list.unshift("a")).toBe("a");
		expect(list).toEqual({
			head: { val: "a", next: null },
		});

		expect(list.unshift("b")).toBe("b");
		expect(list).toEqual({
			head: {
				val: "b",
				next: {
					val: "a",
					next: null,
				},
			},
		});
	});

	test("Get data at given index", () => {
		const list = new SinglyLinkedList();

		list.push("a");
		list.push("b");
		list.push("c");

		expect(list).toEqual({
			head: {
				val: "a",
				next: {
					val: "b",
					next: {
						val: "c",
						next: null,
					},
				},
			},
		});

		expect(list.get(-1)).toBeUndefined();
		expect(list.get(0)).toBe("a");
		expect(list.get(1)).toBe("b");
		expect(list.get(2)).toBe("c");
		expect(list.get(3)).toBeUndefined();

		const list2 = new SinglyLinkedList();

		expect(list2).toEqual({
			head: null,
		});

		expect(list2.get(0)).toBeUndefined();
		expect(list2.get(1)).toBeUndefined();
		expect(list2.get(-1)).toBeUndefined();
	});

	test("Set data at a given index", () => {
		const list = new SinglyLinkedList();

		expect(list).toEqual({
			head: null,
		});

		expect(list.set(0, "a")).toBeUndefined();
		expect(list.set(-1, "a")).toBeUndefined();
		expect(list.set(1, "a")).toBeUndefined();

		list.push("a");
		list.push("b");
		list.push("c");

		expect(list).toEqual({
			head: {
				val: "a",
				next: {
					val: "b",
					next: {
						val: "c",
						next: null,
					},
				},
			},
		});

		expect(list.set(-1, "x")).toBeUndefined();
		expect(list.set(1, "x")).toBe("x");
		expect(list.set(5, "x")).toBeUndefined();
	});

	test("Insert data at a given index", () => {
		const list = new SinglyLinkedList();

		expect(list).toEqual({
			head: null,
		});

		expect(list.insert(0, "a")).toEqual({
			head: {
				val: "a",
				next: null,
			},
		});

		expect(list.insert(-1, "b")).toEqual({
			head: {
				val: "b",
				next: {
					val: "a",
					next: null,
				},
			},
		});

		expect(list.insert(-10, "c")).toEqual({
			head: {
				val: "c",
				next: {
					val: "b",
					next: {
						val: "a",
						next: null,
					},
				},
			},
		});

		expect(list.insert(3, "x")).toEqual({
			head: {
				val: "c",
				next: {
					val: "b",
					next: {
						val: "a",
						next: {
							val: "x",
							next: null,
						},
					},
				},
			},
		});

		expect(list.insert(10, "y")).toEqual({
			head: {
				val: "c",
				next: {
					val: "b",
					next: {
						val: "a",
						next: {
							val: "x",
							next: {
								val: "y",
								next: null,
							},
						},
					},
				},
			},
		});

		expect(list.insert(2, "i")).toEqual({
			head: {
				val: "c",
				next: {
					val: "b",
					next: {
						val: "i",
						next: {
							val: "a",
							next: {
								val: "x",
								next: {
									val: "y",
									next: null,
								},
							},
						},
					},
				},
			},
		});
	});

	test("Delete at a given index", () => {
		let list = new SinglyLinkedList();

		expect(list.delete(-1)).toEqual({ head: null });
		expect(list.delete(0)).toEqual({ head: null });
		expect(list.delete(1)).toEqual({ head: null });

		list.push("x");

		expect(list.delete(-1)).toEqual({ head: { val: "x", next: null } });
		expect(list.delete(1)).toEqual({ head: { val: "x", next: null } });
		expect(list.delete(0)).toEqual({ head: null });

		list.push("x");
		list.push("y");
		list.push("z");

		expect(list.delete(-1)).toEqual({
			head: {
				val: "x",
				next: {
					val: "y",
					next: {
						val: "z",
						next: null,
					},
				},
			},
		});
		expect(list.delete(3)).toEqual({
			head: {
				val: "x",
				next: {
					val: "y",
					next: {
						val: "z",
						next: null,
					},
				},
			},
		});
		expect(list.delete(1)).toEqual({
			head: {
				val: "x",
				next: {
					val: "z",
					next: null,
				},
			},
		});
		expect(list.delete(1)).toEqual({
			head: {
				val: "x",
				next: null,
			},
		});
		expect(list.delete(0)).toEqual({
			head: null,
		});
	});

	test("Reverse a singly linked list", () => {
		const list = new SinglyLinkedList();
		expect(list.reverse()).toEqual({
			head: null,
		});

		list.push("x");
		expect(list.reverse()).toEqual({
			head: {
				val: "x",
				next: null,
			},
		});

		list.push("y");

		expect(list.reverse()).toEqual({
			head: {
				val: "y",
				next: {
					val: "x",
					next: null,
				},
			},
		});

		list.unshift("z");

		expect(list.reverse()).toEqual({
			head: {
				val: "x",
				next: {
					val: "y",
					next: {
						val: "z",
						next: null,
					},
				},
			},
		});

		list.unshift("w");

		expect(list.reverse()).toEqual({
			head: {
				val: "z",
				next: {
					val: "y",
					next: {
						val: "x",
						next: {
							val: "w",
							next: null,
						},
					},
				},
			},
		});
	});
});
