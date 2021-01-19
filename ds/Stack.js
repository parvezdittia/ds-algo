export class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

export class Stack {
	constructor() {
		this.top = null;
		this.length = 0;
	}

	push(value) {
		let temp = this.top;
		this.top = new Node(value);
		this.top.next = temp;
		return ++this.length;
	}

	pop() {
		let value;
		if (this.top) {
			value = this.top.value;
			this.top = this.top.next;
			this.length--;
		}
		return value;
	}
}
