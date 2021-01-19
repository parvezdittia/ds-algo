export class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

export class Queue {
	constructor() {
		this.first = null;
		this.last = null;
		this.length = 0;
	}

	enqueue(value) {
		const newNode = new Node(value);

		if (this.length === 0) {
			this.first = newNode;
			this.last = newNode;
		} else {
			let temp = this.last;
			this.last = new Node(value);
			temp.next = this.last;
		}

		return ++this.length;
	}

	dequeue() {
		let value;
		if (this.length > 1) {
			value = this.first.value;
			this.first = this.first.next;
			this.length--;
		} else if (this.length === 1) {
			value = this.first.value;
			this.first = null;
			this.last = null;
			this.length--;
		}
		return value;
	}
}
