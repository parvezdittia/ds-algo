export class Node {
	constructor(value) {
		this.value = value;
		this.left = null;
		this.right = null;
	}
}

export class BinarySearchTree {
	constructor() {
		this.root = null;
	}

	insert(value) {
		const newNode = new Node(value);

		if (this.root === null) {
			this.root = newNode;
			return this;
		}

		let pointer = this.root;
		let subTree = "";

		while (subTree === "") {
			if (value < pointer.value) {
				if (pointer.left === null) subTree = "left";
				else pointer = pointer.left;
			} else {
				if (pointer.right === null) subTree = "right";
				else pointer = pointer.right;
			}
		}

		pointer[subTree] = newNode;
		return this;
	}

	find(value) {
		let pointer = this.root;

		while (pointer !== null) {
			if (pointer.value === value) {
				break;
			} else if (value < pointer.value) {
				pointer = pointer.left;
			} else {
				pointer = pointer.right;
			}
		}

		return pointer;
	}
}
