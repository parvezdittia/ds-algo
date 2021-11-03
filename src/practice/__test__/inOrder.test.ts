import inOrder from "../inOrder";

describe("Inorder tree traversal", () => {
	test("Leet code example 1", () => {
		expect(
			inOrder({
				val: 1,
				left: null,
				right: {
					val: 2,
					left: {
						val: 3,
						left: null,
						right: null,
					},
					right: null,
				},
			})
		).toEqual([1, 3, 2]);
	});

	test("Leet code example 2", () => {
		expect(inOrder(null)).toEqual([]);
	});

	test("SLeet code example 3", () => {
		expect(
			inOrder({
				val: 1,
				left: null,
				right: null,
			})
		).toEqual([1]);
	});

	test("Leet code example 4", () => {
		expect(
			inOrder({
				val: 1,
				left: {
					val: 2,
					left: null,
					right: null,
				},
				right: null,
			})
		).toEqual([2, 1]);
	});

	test("Leet code example 5", () => {
		expect(
			inOrder({
				val: 1,
				right: {
					val: 2,
					left: null,
					right: null,
				},
				left: null,
			})
		).toEqual([1, 2]);
	});
});
