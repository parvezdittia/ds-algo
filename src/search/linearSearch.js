function linearSearch(arr, target) {
	for (let index in arr) {
		if (arr[index] === target) {
			return parseInt(index);
		}
	}

	return -1;
}

console.log(linearSearch([1, 3, 5, 6, 2, 4, 3], 10));
