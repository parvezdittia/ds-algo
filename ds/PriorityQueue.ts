class Node {
	value: any;
	priority: number;

	constructor(value: any, priority: number) {
		this.value = value;
		this.priority = priority;
	}
}

export class PriorityQueue {
	values: Array<Node>;

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

	enqueue(value: any, priority: number) {
		let newNode = new Node(value, priority);
		let positionOfNewNode = this.values.push(newNode) - 1;

		if (positionOfNewNode === 0) return this;
		let parentPosition = this.parent(positionOfNewNode);
		let priorityOfParentNode = this.values[parentPosition].priority;

		while (priorityOfParentNode > newNode.priority) {
			this.swap(parentPosition, positionOfNewNode);
			positionOfNewNode = parentPosition;
			if (positionOfNewNode === 0) return this;
			parentPosition = this.parent(positionOfNewNode);
			priorityOfParentNode = this.values[parentPosition].priority;
		}

		return this;
	}

	dequeue() {
		if (this.values.length === 0) return undefined;
		if (this.values.length === 1) return this.values.pop();

		let positionOfRoot = 0;
		let positionOfLastLeafNode = this.values.length - 1;

		this.swap(positionOfRoot, positionOfLastLeafNode);

		const node = this.values.pop();

		let pointer = 0;
		let pointerPriority = this.values[pointer].priority;
		let [leftChild, rightChild] = this.children(pointer);
		let leftChildPriority = this.values[leftChild]
			? this.values[leftChild].priority
			: Infinity;
		let rightChildPriority = this.values[rightChild]
			? this.values[rightChild].priority
			: Infinity;

		while (
			pointerPriority > leftChildPriority ||
			pointerPriority > rightChildPriority
		) {
			if (leftChildPriority > rightChildPriority) {
				this.swap(pointer, rightChild);
				pointer = rightChild;
				pointerPriority = this.values[pointer].priority;
			} else {
				this.swap(pointer, leftChild);
				pointer = leftChild;
				pointerPriority = this.values[pointer].priority;
			}
			[leftChild, rightChild] = this.children(pointer);
			leftChildPriority = this.values[leftChild]
				? this.values[leftChild].priority
				: Infinity;
			rightChildPriority = this.values[rightChild]
				? this.values[rightChild].priority
				: Infinity;
		}

		return node;
	}
}
