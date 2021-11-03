// https://leetcode.com/problems/same-tree/

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

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function inorderTraversal(root: TreeNode | null): number[] {
	const visited: Array<number> = [];

	const traverse = (root: TreeNode | null) => {
		if (root === null) return;

		if (root.left !== null) traverse(root.left);
		visited.push(root.val);
		if (root.right !== null) traverse(root.right);
	};

	traverse(root);
	return visited;
}
