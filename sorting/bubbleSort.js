function bubbleSort(arr) {
	for (let i = 0; i < arr.length - 1; i++) {
		for (let j = 0; j < arr.length - 1 - i; j++) {
			console.log(arr, arr[j], arr[j + 1]);

			if (arr[j] > arr[j + 1]) {
				let temp = arr[j + 1];
				arr[j + 1] = arr[j];
				arr[j] = temp;
			}
		}

		console.log("one pass");
	}
}

bubbleSort([1, 2, 3, 4, 6, 5]);
