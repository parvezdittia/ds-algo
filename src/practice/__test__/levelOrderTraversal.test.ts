import levelOrder from "../levelOrderTraversal";

describe("Level Order Traversal", () => {
	test("Leet code test 1", () => {
		expect(
			levelOrder({
				val: 3,
				left: {
					val: 9,
					left: null,
					right: null,
				},
				right: {
					val: 20,
					left: {
						val: 15,
						left: null,
						right: null,
					},
					right: {
						val: 7,
						left: null,
						right: null,
					},
				},
			})
		).toEqual([[3], [9, 20], [15, 7]]);
	});

	test("Leet code test 2", () => {
		expect(
			levelOrder({
				val: 1,
				left: null,
				right: null,
			})
		).toEqual([[1]]);
	});

	test("Leet code test 3", () => {
		expect(levelOrder(null)).toEqual([]);
	});
});
