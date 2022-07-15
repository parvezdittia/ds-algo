export const binarySearch = (arr: Array<any>, fn: () => -1 | 0 | 1) => {
	let left = 0;
	let right = arr.length - 1;

	while (left <= right) {
		let middle = Math.floor((left + right) / 2);
		let target = fn(middle);

		if (target === 0) {
			return middle;
		} else if (target < 0) {
			right = middle - 1;
		} else {
			left = middle + 1;
		}
	}

	return -1;
};
