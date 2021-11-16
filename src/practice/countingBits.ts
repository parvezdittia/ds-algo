//  https://leetcode.com/problems/counting-bits/

function countBits(n: number): number[] {
	const arr: Array<number> = new Array(n + 1);
	const table = new Map<number, number>();
	table.set(0, 0);
	table.set(1, 1);
	table.set(2, 1);

	for (let i = 0; i <= n; i++) {
		if (table.has(i)) {
			// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
			arr[i] = table.get(i)!;
		} else {
			const temp = Math.log2(i);
			let count = 0;
			if (Number.isInteger(temp)) {
				count = 1;
			} else {
				const diff = i - Math.pow(2, Math.floor(temp));
				// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
				count = 1 + table.get(diff)!;
			}
			arr[i] = count;
			table.set(i, count);
		}
	}

	return arr;
}

export default countBits;
