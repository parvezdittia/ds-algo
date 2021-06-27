export class Node {
	val: any;
	next: Node | null;
	constructor(val: any) {
		this.val = val;
		this.next = null;
	}
}

export class SinglyLinkedList {
	head: Node | null;
	constructor() {
		this.head = null;
	}

	push(val: any): number {
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

	pop(): any {
		if (this.head === null) {
			return undefined;
		} else if (this.head.next === null) {
			const poppedValue = this.head.val;
			this.head = null;
			return poppedValue;
		} else {
			let pointer = this.head;
			while (pointer.next?.next !== null) {
				pointer = pointer.next;
			}
			const poppedData = pointer.next.val;
			pointer.next = null;
			return poppedData;
		}
	}

	shift(): any {
		if (this.head === null) {
			return undefined;
		} else if (this.head.next === null) {
			const shiftedValue = this.head.val;
			this.head = null;
			return shiftedValue;
		} else {
			const shiftedValue = this.head.val;
			this.head = this.head.next;
			return shiftedValue;
		}
	}

	unshift(val: any): any {
		const newNode = new Node(val);

		if (this.head === null) {
			this.head = newNode;
		} else {
			newNode.next = this.head;
			this.head = newNode;
		}

		return val;
	}

	get(index: number): any {
		if (index < 0) {
			return undefined;
		}

		let pointer = this.head;

		for (let i = 0; i < index && pointer !== null; i++) {
			pointer = pointer.next;
		}

		return pointer ? pointer.val : undefined;
	}

	set(index: number, data: any): any | undefined {
		if (index < 0) {
			return undefined;
		}

		let pointer = this.head;

		for (let i = 0; i < index && pointer !== null; i++) {
			pointer = pointer.next;
		}

		if (pointer) {
			pointer.val = data;
			return data;
		} else {
			return undefined;
		}
	}

	insert(index: number, data: any): SinglyLinkedList {
		if (index <= 0) {
			const newNode = new Node(data);
			newNode.next = this.head;
			this.head = newNode;
			return this;
		}

		let i = 0;
		let pointer = this.head;

		while (i < index - 1 && pointer.next !== null) {
			pointer = pointer.next;
			i++;
		}

		const newNode = new Node(data);
		newNode.next = pointer.next;
		pointer.next = newNode;
		return this;
	}

	delete(index: number): SinglyLinkedList {
		if (index < 0 || this.head === null) {
			return this;
		}

		if (index === 0) {
			this.head = this.head.next;
			return this;
		} else {
			let i = 0;
			let pointer = this.head;

			while (i < index - 1 && pointer.next !== null) {
				pointer = pointer.next;
				i++;
			}

			if (pointer.next === null) {
				return this;
			} else {
				pointer.next = pointer.next.next;
				return this;
			}
		}
	}

	reverse(): SinglyLinkedList {
		if (this.head === null || this.head.next === null) {
			return this;
		}

		let pointer = null;
		let temp = this.head.next;

		while (temp !== null) {
			this.head.next = pointer;
			pointer = this.head;
			this.head = temp;
			temp = temp.next;
		}

		this.head.next = pointer;
		pointer = this.head;
		return this;
	}

	static merge(
		list1: SinglyLinkedList,
		list2: SinglyLinkedList
	): SinglyLinkedList {
		let temp1 = list1.head;
		let temp2 = list2.head;
		const output: SinglyLinkedList = new SinglyLinkedList();
		let outputTemp: Node = null;

		while (temp1 !== null || temp2 !== null) {
			let min: Node = null;

			if (temp1 === null) {
				min = temp2;
				temp2 = temp2.next;
			} else if (temp2 === null) {
				min = temp1;
				temp1 = temp1.next;
			} else if (temp1.val < temp2.val) {
				min = temp1;
				temp1 = temp1.next;
			} else if (temp1.val >= temp2.val) {
				min = temp2;
				temp2 = temp2.next;
			}

			if (output.head === null) {
				output.head = new Node();
				output.head.val = min.val;
				outputTemp = output.head;
			} else {
				outputTemp.next = new Node();
				outputTemp = outputTemp.next;
				outputTemp.val = min.val;
			}
		}
		return output;
	}
}
