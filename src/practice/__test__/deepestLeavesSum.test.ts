import deepestLeavesSum from "../deepestLeavesSum";

describe("Deepest leaves sum", () => {
	test("Leet code test 1", () => {
		expect(
			deepestLeavesSum({
				val: 1,
				left: {
					val: 2,
					left: {
						val: 4,
						left: {
							val: 7,
							left: null,
							right: null,
						},
						right: null,
					},
					right: {
						val: 5,
						left: null,
						right: null,
					},
				},
				right: {
					val: 3,
					left: null,
					right: {
						val: 6,
						left: null,
						right: {
							val: 8,
							left: null,
							right: null,
						},
					},
				},
			})
		).toBe(15);
	});

	test("Leet code test 2", () => {
		expect(
			deepestLeavesSum({
				val: 6,
				left: {
					val: 7,
					left: {
						val: 2,
						left: {
							val: 9,
							left: null,
							right: null,
						},
						right: null,
					},
					right: {
						val: 7,
						left: {
							val: 1,
							left: null,
							right: null,
						},
						right: {
							val: 4,
							left: null,
							right: null,
						},
					},
				},
				right: {
					val: 8,
					left: {
						val: 1,
						left: null,
						right: null,
					},
					right: {
						val: 3,
						left: null,
						right: {
							val: 5,
							left: null,
							right: null,
						},
					},
				},
			})
		).toBe(19);
	});
});
