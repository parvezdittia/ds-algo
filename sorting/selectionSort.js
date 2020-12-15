function selectionSort(arr) {
	for (let i = 0; i < arr.length - 1; i++) {
		let min = i;

		for (let j = i + 1; j < arr.length; j++) {
			console.log(i, j);

			if (arr[j] < arr[min]) {
				min = j;
			}
		}

		let temp = arr[i];
		arr[i] = arr[min];
		arr[min] = temp;
	}

	return arr;
}

console.log(selectionSort([22, 34, 12, 9, 20, 15]));
