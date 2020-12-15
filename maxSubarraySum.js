function maxSubarraySum(arr, len) {
	if (len > arr.length) {
		return null;
	}

	let sum = 0;
	for (let i = 0; i < len; i++) {
		sum += arr[i];
	}

	let max = sum;
	for (let i = 1; i <= arr.length - len; i++) {
		let start = arr[i - 1];
		let end = arr[i + len - 1];

		sum = sum - start + end;

		if (max < sum) {
			max = sum;
		}
	}

	return max;
}

console.log(maxSubarraySum([1, 2, 3], 2));
