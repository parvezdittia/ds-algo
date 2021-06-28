const generateBinaryNumbers = (size: number): Array<string> | undefined => {
	if (size <= 0) return undefined;

	const binaryNumbers: Array<string> = [];

	const breakDown = (index: number) => {
		if (index === size) {
			binaryNumbers.push(num.join(""));
			return;
		}

		num[index] = "0";
		breakDown(index + 1);
		num[index] = "1";
		breakDown(index + 1);
	};

	const num: Array<string> = new Array(size);
	breakDown(0);

	return binaryNumbers;
};

export default generateBinaryNumbers;
