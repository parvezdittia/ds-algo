export class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
	}
}

export class SinglyLinkedList {
	constructor() {
		this.head = null;
	}

	push(val) {
		const newNode = new Node(val);

		if (this.head === null) {
			this.head = newNode;
			return 1;
		}

		let lengthOfList = 1;
		let pointer = this.head;

		while (pointer.next !== null) {
			pointer = pointer.next;
			lengthOfList = lengthOfList + 1;
		}

		pointer.next = newNode;
		return lengthOfList + 1;
	}

	pop() {
		if (this.head === null) {
			return undefined;
		} else if (this.head.next === null) {
			let popedValue = this.head.val;
			this.head = null;
			return popedValue;
		} else {
			let pointer = this.head;
			while (pointer.next.next !== null) {
				pointer = pointer.next;
			}
			let popedData = pointer.next.val;
			pointer.next = null;
			return popedData;
		}
	}

	shift() {
		if (this.head === null) {
			return undefined;
		} else if (this.head.next === null) {
			let shiftedValue = this.head.val;
			this.head = null;
			return shiftedValue;
		} else {
			let shiftedValue = this.head.val;
			this.head = this.head.next;
			return shiftedValue;
		}
	}

	unshift(val) {
		let newNode = new Node(val);

		if (this.head === null) {
			this.head = newNode;
		} else {
			newNode.next = this.head;
			this.head = newNode;
		}

		return val;
	}

	get(index) {
		if (index < 0 || index >= this.length) {
			return undefined;
		}

		let pointer = this.head;
		for (let i = 0; i < index; i++) {
			pointer = pointer.next;
		}

		return pointer.val;
	}

	set(index, data) {
		if (index < 0 || index > this.length) {
			return false;
		}

		let pointer = this.head;
		let i = 0;

		while (i < index) {
			pointer = pointer.next;
			i++;
		}

		pointer.val = data;
		return true;
	}

	insert(index, data) {
		if (index < 0) {
			return undefined;
		}

		let dummyNode = new Node(0);
		dummyNode.next = this.head;
		let pointer = dummyNode;

		let i = 0;

		while (i < index) {
			pointer = pointer.next;
			i++;
		}

		let newNode = new Node(data);
		newNode.next = pointer.next;
		pointer.next = newNode;
		return data;
	}
}
