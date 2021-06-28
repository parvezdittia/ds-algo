import generateBinaryNumbers from "../generateBinaryNumbers";
import { describe, test, expect } from "@jest/globals";

describe("Generate binary numbers", () => {
	test("Generate number of n-digits", () => {
		expect(generateBinaryNumbers(0)).toEqual(undefined);
		expect(generateBinaryNumbers(1)).toEqual(["0", "1"]);
		expect(generateBinaryNumbers(2)).toEqual(["00", "01", "10", "11"]);
		expect(generateBinaryNumbers(3)).toEqual([
			"000",
			"001",
			"010",
			"011",
			"100",
			"101",
			"110",
			"111",
		]);
	});
});
