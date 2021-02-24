export const selectionSort = (arr: any, comp?: (a: any, b: any) => any) => {
	const swap = (i: number, j: number) => {
		let temp = arr[j];
		arr[j] = arr[i];
		arr[i] = temp;
	};

	for (let i = 0; i < arr.length - 1; i++) {
		let min = i;

		for (let j = i + 1; j < arr.length; j++) {
			let test;
			if (comp) {
				test = comp(arr[min], arr[j]) > 0;
			} else {
				test = arr[min] > arr[j];
			}

			if (test) {
				min = j;
			}
		}

		swap(i, min);
	}

	return arr;
};
