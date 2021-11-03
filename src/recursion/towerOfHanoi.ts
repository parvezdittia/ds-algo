class Tower {
	arr: Array<number> = [];
	name: "A" | "B" | "C";

	constructor(height: number, name: "A" | "B" | "C") {
		for (let i = 0; i < height; i++) {
			this.arr.push(i);
		}
		this.name = name;
	}
}

interface Move {
	disk: number;
	from: string;
	to: string;
}

const towerOfHanoi = (towerHeight: number): number => {
	let moveCount = 0;
	if (towerHeight <= 0) {
		return moveCount;
	}

	const towerA = new Tower(towerHeight, "A");
	const towerB = new Tower(0, "B");
	const towerC = new Tower(0, "C");
	const moves: Array<Move> = [];

	const getHelperTower = (tower1: Tower, tower2: Tower): Tower => {
		const towers = ["A", "B", "C"];

		const helperTowerName = towers.filter((name) => {
			return name !== tower1.name && name !== tower2.name;
		})[0];

		if (helperTowerName === "A") return towerA;
		else if (helperTowerName === "B") return towerB;
		else return towerC;
	};

	const transfer = (
		sourceTower: Tower,
		towerHeight: number,
		destinationTower: Tower
	) => {
		if (towerHeight === 1) {
			const temp = sourceTower.arr.shift();
			if (temp !== undefined) {
				destinationTower.arr.unshift(temp);
				const move: Move = {
					from: sourceTower.name,
					to: destinationTower.name,
					disk: temp,
				};
				console.log(move);
				moves.push(move);
			}
			moveCount++;
			return;
		}

		const helperTower = getHelperTower(sourceTower, destinationTower);
		if (towerHeight > 1) transfer(sourceTower, towerHeight - 1, helperTower);
		transfer(sourceTower, towerHeight, destinationTower);
		if (towerHeight > 1)
			transfer(helperTower, towerHeight - 1, destinationTower);
	};

	if (towerHeight > 1) transfer(towerA, towerHeight - 1, towerB);
	transfer(towerA, towerHeight, towerC);
	if (towerHeight > 1) transfer(towerB, towerHeight - 1, towerC);
	return moveCount;
};

export default towerOfHanoi;

console.log(towerOfHanoi(3));
