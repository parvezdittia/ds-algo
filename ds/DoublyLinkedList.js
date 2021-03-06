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

	get(index) {
		if (index < 0) {
			return undefined;
		}

		let pointer = this.head;
		for (let i = 0; pointer !== null && i < index; i++) {
			pointer = pointer.next;
		}

		return pointer ? pointer.value : undefined;
	}

	set(index, data) {
		if (index < 0) {
			return undefined;
		}

		let pointer = this.head;
		for (let i = 0; pointer !== null && i < index; i++) {
			pointer = pointer.next;
		}

		if (pointer) {
			pointer.value = data;
			return data;
		} else {
			return undefined;
		}
	}

	insert(index, data) {
		const newNode = new Node(data);

		if (index < 0 && this.head !== null) {
			newNode.next = this.head;
			this.head.previous = newNode;
			this.head = newNode;
			return this;
		} else if (index < 0 && this.head === null) {
			this.head = newNode;
			return this;
		}

		let pointer = this.head;
		for (let i = 0; i < index - 1 && pointer.next !== null; i++) {
			pointer = pointer.next;
		}

		if (pointer.next === null) {
			pointer.next = newNode;
			newNode.previous = pointer;
			return this;
		} else {
			newNode.previous = pointer;
			newNode.next = pointer.next;
			pointer.next = newNode;
			newNode.next.previous = newNode;
			return this;
		}
	}

	delete(index) {
		if (index < 0 || this.head === null) {
			return this;
		}

		if (index === 0) {
			this.head = this.head.next;
			return this;
		} else {
			let pointer = this.head;

			for (let i = 0; i < index - 1 && pointer.next !== null; i++) {
				pointer = pointer.next;
			}

			if (pointer.next === null) {
				return this;
			} else {
				let temp = pointer.next?.next;
				pointer.next = temp;
				if (temp) {
					temp.previous = pointer;
				}
				return this;
			}
		}
	}
}
