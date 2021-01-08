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
}
