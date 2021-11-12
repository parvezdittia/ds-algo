import isValidBST from "../validateBinarySearchTree";

describe("Validate BST", () => {
	test("Leet code test 1", () => {
		expect(
			isValidBST({
				val: 2,
				left: {
					val: 1,
					left: null,
					right: null,
				},
				right: {
					val: 3,
					left: null,
					right: null,
				},
			})
		).toEqual(true);
	});

	test("Leet code test 2", () => {
		expect(
			isValidBST({
				val: 2,
				left: {
					val: 2,
					left: null,
					right: null,
				},
				right: {
					val: 2,
					left: null,
					right: null,
				},
			})
		).toEqual(false);
	});

	test("Leet code test 3", () => {
		expect(
			isValidBST({
				val: 5,
				left: {
					val: 1,
					left: null,
					right: null,
				},
				right: {
					val: 4,
					left: {
						val: 3,
						left: null,
						right: null,
					},
					right: {
						val: 6,
						left: null,
						right: null,
					},
				},
			})
		).toBe(false);
	});

	test("Leet code test 4", () => {
		expect(
			isValidBST({
				val: 1,
				left: null,
				right: null,
			})
		).toEqual(true);
	});
});
