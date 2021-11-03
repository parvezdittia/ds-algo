function minSubarrayLen(arr, target) {
	let left = 0,
		right = 0;
	let sum = arr[0];
	let len = Infinity;

	while (right < arr.length && left < arr.length) {
		if (sum < target) {
			sum = calculateSum(sum, left, right, arr, "grow");
			right++;
		} else if (sum === target) {
			let temp = right - left + 1;
			len = len > temp ? temp : len;
			sum = calculateSum(sum, left, right, arr, "both");
			left++;
			right++;
		} else {
			let temp = right - left + 1;
			len = len > temp ? temp : len;
			sum = calculateSum(sum, left, right, arr, "shrink");
			left++;
		}
	}

	return len === Infinity ? 0 : len;
}

function calculateSum(sum, left, right, arr, type) {
	if (type === "both") {
		sum = sum - arr[left] + arr[right + 1];
	} else if (type === "shrink") {
		sum = sum - arr[left];
	} else {
		sum = sum + arr[right + 1];
	}

	return sum;
}

console.log(minSubarrayLen([4, 3, 3, 8, 1, 2, 3], 11));
