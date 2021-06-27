const checkArrayIsSorted = (arr: Array<T>): boolean | undefined => {
	const breakDown = (index: number): boolean => {
		if (index === 0) return true;

		if (breakDown(index - 1)) {
			return arr[index] >= arr[index - 1];
		} else {
			return false;
		}
	};

	if (arr.length === 0) {
		return undefined;
	}

	return breakDown(arr.length - 1);
};

export default checkArrayIsSorted;
