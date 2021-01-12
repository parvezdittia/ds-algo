export class Node {
	constructor(value) {
		this.value = value;
		this.previous = null;
		this.next = null;
	}
}

export class DoublyLinkedList {
	constructor() {
		this.head = null;
	}

	push(value) {
		const node = new Node(value);

		if (this.head === null) {
			this.head = node;
			return 1;
		}

		let lengthOfList = 1;
		let pointer = this.head;
		while (pointer.next !== null) {
			pointer = pointer.next;
			lengthOfList++;
		}
		pointer.next = node;
		node.previous = pointer;
		node.next = null;
		return lengthOfList + 1;
	}

	pop() {
		if (this.head === null) {
			return undefined;
		} else if (this.head.next === null) {
			const poppedValue = this.head.value;
			this.head = null;
			return poppedValue;
		} else {
			let pointer = this.head;
			while (pointer.next.next !== null) {
				pointer = pointer.next;
			}
			const poppedValue = pointer.next.value;
			pointer.next = null;
			return poppedValue;
		}
	}

	shift() {
		if (this.head === null) {
			return undefined;
		} else if (this.head.next === null) {
			const shiftedValue = this.head.value;
			this.head = null;
			return shiftedValue;
		} else {
			const shiftedValue = this.head.value;
			this.head = this.head.next;
			this.head.previous = null;
			return shiftedValue;
		}
	}

	unshift(value) {
		const newNode = new Node(value);
		if (this.head === null) {
			this.head = newNode;
		} else {
			let temp = this.head;
			this.head = newNode;
			this.head.next = temp;
			temp.previous = this.head;
		}
		return value;
	}
}
