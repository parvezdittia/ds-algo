import towerOfHanoi from "../towerOfHanoi";
import { describe, test, expect } from "@jest/globals";

describe("Tower of Hanoi", () => {
	test("Number of moves", () => {
		// expect(towerOfHanoi(0)).toEqual(0);
		// expect(towerOfHanoi(1)).toEqual(1);
		// expect(towerOfHanoi(2)).toEqual(3);
		expect(towerOfHanoi(3)).toEqual(7);
		// expect(towerOfHanoi(4)).toEqual(15);
	});
});
