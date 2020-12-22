import { Node } from "../SinglyLinkedList.js";
import { describe, expect, test } from "@jest/globals";

describe("Node Test", () => {
	test("Create Node", () => {
		const node = new Node(1);
		expect(node.val).toBe(1);
		expect(node.next).toBeNull();
	});
});
