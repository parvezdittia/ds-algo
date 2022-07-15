function searchRange(nums: number[], target: number): number[] {
	let start = 0;
	let end = nums.length - 1;
	let middle = Math.floor((start + end) / 2);

	let firstPos = -1;
	while (start <= end) {
		// console.log(start, middle, end);
		// console.log(nums[start], nums[middle], nums[end]);

		if (nums[middle] === target) {
			console.log(nums[middle - 1], nums[middle], nums[middle + 1]);
			if (nums[middle - 1] < target && nums[middle + 1] >= target) {
				console.log("here");
				firstPos = middle;
				break;
			} else if (nums[middle - 1] === target && nums[middle + 1] === target) {
				end = middle;
			} else if (nums[middle - 1] === target && nums[middle + 1] > target) {
				end = middle;
			}
		} else if (nums[middle] < target) {
			start = middle;
		} else {
			end = middle;
		}

		middle = Math.floor((start + end) / 2);
	}

	if (firstPos === -1) return [-1, -1];

	return [firstPos, 0];
}

console.log(searchRange([5, 7, 7, 8, 8, 10], 8));
