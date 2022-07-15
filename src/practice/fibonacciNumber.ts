function fib(n: number): number {
	const store: Map<number, number> = new Map();

	store.set(0, 0);
	store.set(1, 1);

	const calculate = (n: number): number => {
		if (store.has(n)) {
			return store.get(n);
		} else {
			const fib = calculate(n - 1) + calculate(n - 2);
			store.set(n, fib);
			return fib;
		}
	};

	return calculate(n);
}
