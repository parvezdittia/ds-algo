function areThereDuplicates() {
	let map = {};

	for (let i in arguments) {
		let arg = arguments[i];

		if (map[arg]) {
			return true;
		} else {
			map[arg] = true;
		}
	}

	return false;
}
