import getTargetCopy from "../getTargetCopy";

describe("Get target copy", () => {
	test("Leet code test 1", () => {
		const original = {
			val: 7,
			left: {
				val: 4,
				left: null,
				right: null,
			},
			right: {
				val: 3,
				left: {
					val: 6,
					left: null,
					right: null,
				},
				right: {
					val: 19,
					left: null,
					right: null,
				},
			},
		};

		const cloned = JSON.parse(JSON.stringify(original));

		expect(
			getTargetCopy(original, cloned, { val: 3, left: null, right: null })
		).toEqual({
			val: 3,
			left: {
				val: 6,
				left: null,
				right: null,
			},
			right: {
				val: 19,
				left: null,
				right: null,
			},
		});
	});

	test("Leet code test 2", () => {
		const original = {
			val: 7,
			left: null,
			right: null,
		};

		const cloned = JSON.parse(JSON.stringify(original));

		expect(
			getTargetCopy(original, cloned, { val: 7, left: null, right: null })
		).toEqual({
			val: 7,
			left: null,
			right: null,
		});
	});

	test("Leet code test 3", () => {
		const original = {
			val: 8,
			left: null,
			right: {
				val: 6,
				left: null,
				right: {
					val: 5,
					left: null,
					right: {
						val: 4,
						left: null,
						right: {
							val: 3,
							left: null,
							right: {
								val: 2,
								left: null,
								right: {
									val: 1,
									left: null,
									right: null,
								},
							},
						},
					},
				},
			},
		};

		const cloned = JSON.parse(JSON.stringify(original));

		expect(
			getTargetCopy(original, cloned, { val: 4, left: null, right: null })
		).toEqual({
			val: 4,
			left: null,
			right: {
				val: 3,
				left: null,
				right: {
					val: 2,
					left: null,
					right: {
						val: 1,
						left: null,
						right: null,
					},
				},
			},
		});
	});
});
