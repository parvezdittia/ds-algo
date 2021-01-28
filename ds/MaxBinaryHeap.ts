export class MaxBinaryHeap {
	values: Array<any>;

	constructor() {
		this.values = [];
	}

	private swap(index1: number, index2: number) {
		let temp = this.values[index1];
		this.values[index1] = this.values[index2];
		this.values[index2] = temp;
	}

	private parent(index: number) {
		return Math.floor((index - 1) / 2);
	}

	private children(index: number) {
		return [2 * index + 1, 2 * index + 2];
	}

	insert(value: any) {
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

	extractMax() {
		let positionOfRoot = 0;
		let positionOfLastLeafNode = this.values.length - 1;

		this.swap(positionOfRoot, positionOfLastLeafNode);

		const maxValue = this.values.pop();

		let pointer = 0;
		let pointerValue = this.values[pointer];
		let [leftChild, rightChild] = this.children(pointer);
		let leftChildValue = this.values[leftChild];
		let rightChildValue = this.values[rightChild];

		while (pointerValue < leftChildValue || pointerValue < rightChildValue) {
			if (leftChildValue <= rightChildValue) {
				this.swap(pointer, rightChild);
				pointer = rightChild;
				pointerValue = this.values[rightChild];
			} else {
				this.swap(pointer, leftChild);
				pointer = leftChild;
				pointerValue = this.values[leftChild];
			}
			[leftChild, rightChild] = this.children(pointer);
			leftChildValue = this.values[leftChild];
			rightChildValue = this.values[rightChild];
		}

		return maxValue;
	}
}
