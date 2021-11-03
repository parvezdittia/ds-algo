function sameFrequency(num1, num2) {
	let str1 = num1.toString();
	let str2 = num2.toString();

	if (str1.length !== str2.length) {
		return false;
	}

	let map = {};

	for (let i = 0; i < str1.length; i++) {
		let character = str1[i];

		if (map[character]) {
			map[character]++;
		} else {
			map[character] = 1;
		}
	}

	for (let i = 0; i < str2.length; i++) {
		let character = str2[i];

		if (!map[character]) {
			return false;
		} else {
			if (map[character] > 0) {
				map[character]--;
			} else {
				return false;
			}
		}
	}

	return true;
}
