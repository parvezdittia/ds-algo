function checkPossibility(nums: number[]): boolean {
	let downCount = 0;

	for (let i = 0; i < nums.length - 1; i++) {
		if (nums[i] > nums[i + 1]) downCount++;

		if (downCount === 2) return false;
	}

	return true;
}
