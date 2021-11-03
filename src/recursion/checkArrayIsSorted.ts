const checkArrayIsSorted = <T>(
	arr: Array<T>,
	comparator: (arg0: T, arg1: T) => boolean
): boolean | undefined => {
	const breakDown = (index: number): boolean => {
		if (index === 0) return true;

		if (breakDown(index - 1)) {
			return comparator(arr[index], arr[index - 1]);
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
