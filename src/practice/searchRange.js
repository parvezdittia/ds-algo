/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function searchRange(nums, target) {
	var start = 0;
	var end = nums.length - 1;
	var middle = Math.floor((start + end) / 2);
	var firstPos = -1;
	while (start <= end) {
		if (nums[middle] === target) {
			if (nums[middle - 1] < target && nums[middle + 1] >= target) {
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

	var lastPos = -1;
	while (start <= end) {
		if (nums[middle] === target) {
			if (nums[middle - 1] <= target && nums[middle + 1] > target) {
				lastPos = middle;
				break;
			} else if (nums[middle - 1] === target && nums[middle + 1] === target) {
				start = middle;
			} else if (nums[middle - 1] === target && nums[middle + 1] > target) {
				start = middle;
			}
		} else if (nums[middle] < target) {
			start = middle;
		} else {
			end = middle;
		}
		middle = Math.floor((start + end) / 2);
	}

	return [firstPos, lastPos];
}

console.log(searchRange([5, 7, 7, 8, 8, 10], 8));
