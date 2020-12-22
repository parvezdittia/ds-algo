class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
	}
}

class SinglyLinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}

	push(val) {
		let newNode = new Node(val);

		if (this.head === null) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			this.tail.next = newNode;
			this.tail = newNode;
		}

		this.length++;

		return this;
	}

	pop() {
		let val;

		if (this.head === null) {
			return val;
		} else if (this.head === this.tail) {
			val = this.head.val;
			this.head = null;
			this.tail = null;
			this.length--;
		} else {
			let prev = this.head;
			while (prev.next !== this.tail) {
				prev = prev.next;
			}
			val = this.tail.val;
			this.tail = prev;
			this.tail.next = null;
			this.length--;
		}

		return val;
	}

	shift() {
		let val;

		if (this.head === null) {
			return val;
		} else if (this.head === this.tail) {
			val = this.head.val;
			this.head = null;
			this.tail = null;
			this.length--;
		} else {
			val = this.head.val;
			this.head = this.head.next;
			this.length--;
		}

		return val;
	}

	unshift(val) {
		let newNode = new Node(val);

		if (this.head === null) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			newNode.next = this.head;
			this.head = newNode;
		}

		this.length++;

		return this;
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

let sll = new SinglyLinkedList();
sll.unshift(1).unshift(2).push(3);
console.log(sll);
