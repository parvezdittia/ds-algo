import countBits from "../countingBits";

describe("Counting Bits", () => {
	test("Leetcode test 1", () => {
		expect(countBits(2)).toEqual([0, 1, 1]);
	});

	test.only("Leetcode test 2", () => {
		expect(countBits(5)).toEqual([0, 1, 1, 2, 1, 2]);
	});
});
