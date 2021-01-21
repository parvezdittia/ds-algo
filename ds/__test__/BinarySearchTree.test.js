import { BinarySearchTree, Node } from "../BinarySearchTree";
import { describe, test, expect } from "@jest/globals";

describe("Node test", () => {
	test("Create Node", () => {
		const node = new Node(1);
		expect(node.value).toBe(1);
		expect(node.left).toBeNull();
		expect(node.right).toBeNull();
	});

	test("Create Node with objects", () => {
		const node = new Node({ x: 1, y: "hello world" });
		expect(node.value.x).toBe(1);
		expect(node.value.y).toEqual("hello world");
		expect(node.value.z).toBeUndefined();
		expect(node.left).toBeNull();
		expect(node.right).toBeNull();
	});

	test("Create node with arrays", () => {
		const node = new Node(["a", "b", "c"]);
		expect(node.value[0]).toBe("a");
		expect(node.value[1]).toBe("b");
		expect(node.value[2]).toBe("c");
		expect(node.left).toBeNull();
		expect(node.right).toBeNull();
	});
});

describe("Binary Search Tree test", () => {
	test("Insert in a binary tree", () => {
		const tree = new BinarySearchTree();

		tree.insert(10);
		tree.insert(5);
		tree.insert(13);
		tree.insert(11);
		tree.insert(2);
		tree.insert(16);
		tree.insert(7);

		expect(tree).toEqual({
			root: {
				value: 10,
				left: {
					value: 5,
					left: {
						value: 2,
						left: null,
						right: null,
					},
					right: {
						value: 7,
						left: null,
						right: null,
					},
				},
				right: {
					value: 13,
					left: {
						value: 11,
						left: null,
						right: null,
					},
					right: {
						value: 16,
						left: null,
						right: null,
					},
				},
			},
		});
	});

	test("Find in a binary tree", () => {
		const tree = new BinarySearchTree();

		expect(tree.find(10)).toBeNull();

		tree.insert(10);
		tree.insert(5);
		tree.insert(13);
		tree.insert(11);
		tree.insert(2);
		tree.insert(16);
		tree.insert(7);

		expect(tree.find(7)).toEqual({
			value: 7,
			left: null,
			right: null,
		});

		expect(tree.find(11)).toEqual({
			value: 11,
			left: null,
			right: null,
		});

		expect(tree.find(13)).toEqual({
			value: 13,
			left: {
				value: 11,
				left: null,
				right: null,
			},
			right: {
				value: 16,
				left: null,
				right: null,
			},
		});

		expect(tree.find(5)).toEqual({
			value: 5,
			left: {
				value: 2,
				left: null,
				right: null,
			},
			right: {
				value: 7,
				left: null,
				right: null,
			},
		});

		expect(tree.find(10)).toEqual({
			value: 10,
			left: {
				value: 5,
				left: {
					value: 2,
					left: null,
					right: null,
				},
				right: {
					value: 7,
					left: null,
					right: null,
				},
			},
			right: {
				value: 13,
				left: {
					value: 11,
					left: null,
					right: null,
				},
				right: {
					value: 16,
					left: null,
					right: null,
				},
			},
		});
	});
});
