function same(arr1, arr2) {
	let obj = {};

	for (let i in arr1) {
		if (obj.hasOwnProperty(arr1[i])) {
			obj[arr1[i]]++;
		} else {
			obj[arr1[i]] = 1;
		}
	}

	for (let i in arr2) {
		let x = Math.sqrt(arr2[i]);

		if (obj.hasOwnProperty(x)) {
			obj[x]--;

			if (obj[x] === 0) {
				delete obj[x];
			}
		} else {
			return false;
		}
	}

	if (Object.keys(obj).length > 0) {
		return false;
	} else {
		return true;
	}
}

console.log(same([1, 2, 3, 5], [1, 25, 4, 9, 9]));
