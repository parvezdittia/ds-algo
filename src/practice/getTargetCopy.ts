// https://leetcode.com/problems/find-a-corresponding-node-of-a-binary-tree-in-a-clone-of-that-tree/

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

function getTargetCopy(
	original: TreeNode | null,
	cloned: TreeNode | null,
	target: TreeNode
): TreeNode | null {
	let found = false;
	let copy: TreeNode | null = null;

	const traverse = (original: TreeNode, cloned: TreeNode) => {
		if (found) return;

		if (original.left && cloned.left) traverse(original.left, cloned.left);

		if (original.val === target.val) {
			found = true;
			copy = cloned;
		}

		if (original.right && cloned.right) traverse(original.right, cloned.right);
	};

	if (original && cloned) traverse(original, cloned);

	return copy;
}

export default getTargetCopy;
