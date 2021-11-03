export const bubbleSort = (arr: any, comp?: (a: any, b: any) => any) => {
	const swap = (i: number, j: number) => {
		let temp = arr[j];
		arr[j] = arr[i];
		arr[i] = temp;
	};

	for (let i = 0; i < arr.length - 1; i++) {
		for (let j = 0; j < arr.length - 1 - i; j++) {
			let test;
			if (comp) {
				test = comp(arr[j], arr[j + 1]) > 0;
			} else {
				test = arr[j] > arr[j + 1];
			}

			if (test) {
				swap(j, j + 1);
			}
		}
	}

	return arr;
};
