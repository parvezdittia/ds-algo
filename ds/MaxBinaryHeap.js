export class MaxBinaryHeap {
	constructor() {
		this.values = [];
	}

	parent(index) {
		return Math.floor((index - 1) / 2);
	}

	insert(value) {
		let positionOfNewNode = this.values.push(value) - 1;

		let parentPosition = this.parent(positionOfNewNode);
		let valueOfParentNode = this.values[parentPosition];

		while (valueOfParentNode < value && positionOfNewNode > 0) {
			this.values[positionOfNewNode] = valueOfParentNode;
			this.values[parentPosition] = value;

			positionOfNewNode = parentPosition;
			parentPosition = this.parent(positionOfNewNode);
			valueOfParentNode = this.values[parentPosition];
		}

		return this;
	}
}
