// https://leetcode.com/problems/validate-binary-search-tree/

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

function isValidBST(root: TreeNode | null): boolean {
	let max = -Infinity;
	let flag = true;

	const traverse = (root: TreeNode) => {
		if (!flag) return flag;

		if (root.left) traverse(root.left);

		if (root.val > max) {
			max = root.val;
		} else {
			flag = false;
		}

		if (root.right) traverse(root.right);
	};

	if (root) {
		traverse(root);
	}
	return flag;
}

export default isValidBST;
