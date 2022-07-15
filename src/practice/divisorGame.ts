function divisorGame(n: number): boolean {
	const store: Array<boolean> = [];
	store.push(false);
	store.push(true);

	const calculate = (n: number): boolean => {
		if (store[n - 1]) {
			return store[n - 1];
		} else {
		}
	};

	return calculate(n);
}
