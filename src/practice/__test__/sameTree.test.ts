import isSameTree from "../sameTree";

describe("Is same tree", () => {
	test("Leet code test 1", () => {
		const tree1 = {
			val: 1,
			left: {
				val: 2,
				left: null,
				right: null,
			},
			right: {
				val: 3,
				left: null,
				right: null,
			},
		};

		const tree2 = {
			val: 1,
			left: {
				val: 2,
				left: null,
				right: null,
			},
			right: {
				val: 3,
				left: null,
				right: null,
			},
		};

		expect(isSameTree(tree1, tree2)).toBe(true);
	});

	test("Leet code test 1", () => {
		const tree1 = {
			val: 1,
			left: {
				val: 1,
				left: null,
				right: null,
			},
			right: null,
		};

		const tree2 = {
			val: 1,
			left: null,
			right: {
				val: 2,
				left: null,
				right: null,
			},
		};

		expect(isSameTree(tree1, tree2)).toBe(false);
	});

	test("Leet code test 1", () => {
		const tree1 = {
			val: 1,
			left: {
				val: 2,
				left: null,
				right: null,
			},
			right: {
				val: 1,
				left: null,
				right: null,
			},
		};

		const tree2 = {
			val: 1,
			left: {
				val: 1,
				left: null,
				right: null,
			},
			right: {
				val: 2,
				left: null,
				right: null,
			},
		};

		expect(isSameTree(tree1, tree2)).toBe(false);
	});
});
