export class MaxBinaryHeap {
	constructor() {
		this.values = [];
	}

	parent(index) {
		return Math.floor((index - 1) / 2);
	}

	children(index) {
		return [2 * index + 1, 2 * index + 2];
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

	extractMax() {
		let positionOfRoot = 0;
		let positionOfLastLeafNode = this.values.length - 1;

		let temp = this.values[positionOfLastLeafNode];
		this.values[positionOfLastLeafNode] = this.values[positionOfRoot];
		this.values[positionOfRoot] = temp;

		const maxValue = this.values.pop();

		let pointer = 0;
		let pointerValue = this.values[pointer];
		let [leftChild, rightChild] = this.children(pointer);
		let leftChildValue = this.values[leftChild];
		let rightChildValue = this.values[rightChild];

		while (pointerValue < leftChildValue || pointerValue < rightChildValue) {
			if (leftChildValue <= rightChildValue) {
				let temp = this.values[rightChild];
				this.values[rightChild] = this.values[pointer];
				this.values[pointer] = temp;
				pointer = rightChild;
				pointerValue = this.values[rightChild];
			} else {
				let temp = this.values[leftChild];
				this.values[leftChild] = this.values[pointer];
				this.values[pointer] = temp;
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
