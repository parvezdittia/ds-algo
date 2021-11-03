function pow(base, exponent) {
	if (exponent === 0) {
		return 1;
	} else {
		return base * pow(base, exponent - 1);
	}
}

console.log(pow(2, 10));
