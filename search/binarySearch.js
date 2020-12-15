function binarySearch(arr, target) {
	console.log(arr);

	let left = 0;
	let right = arr.length - 1;

	while (left <= right) {
		let middle = Math.floor((left + right) / 2);

		if (target === arr[middle]) {
			return middle;
		} else if (target < arr[middle]) {
			right = middle - 1;
		} else {
			left = middle + 1;
		}
	}

	return -1;
}

console.log(binarySearch([1, 2, 3, 4], 3));
