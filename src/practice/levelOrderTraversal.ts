// https://leetcode.com/problems/binary-tree-level-order-traversal/

// Definition for a binary tree node.
class TreeNode {
	val: number;
	left: TreeNode | null;
	right: TreeNode | null;
	constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
		this.val = val === undefined ? 0 : val;
		this.left = left === undefined ? null : left;
		this.right = right === undefined ? null : right;
	}
}

function levelOrder(root: TreeNode | null): number[][] {
	const arr: Array<Array<number>> = [];
	let queue: Array<TreeNode> = [];

	const traverse = () => {
		const level = queue.map((node) => node.val);
		arr.push(level);

		const temp: Array<TreeNode> = [];
		for (const node of queue) {
			if (node.left) temp.push(node.left);
			if (node.right) temp.push(node.right);
		}

		queue = temp;
	};

	if (root) {
		queue.push(root);
		while (queue.length !== 0) traverse();
	}

	return arr;
}

export default levelOrder;
