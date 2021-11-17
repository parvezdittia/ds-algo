// https://leetcode.com/problems/deepest-leaves-sum/

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

function deepestLeavesSum(root: TreeNode | null): number {
	const traverse = (root: TreeNode, level: number) => {
		if (root.left) traverse(root.left, level + 1);

		if (root.left === null && root.right === null) {
			arr.push({ val: root.val, level: level });
			if (level > maxLevel) maxLevel = level;
		}

		if (root.right) traverse(root.right, level + 1);
	};

	let maxLevel = -Infinity;
	const arr: Array<{ val: number; level: number }> = [];
	let sum = 0;

	if (root) {
		traverse(root, 0);

		sum = arr.reduce((prev, curr) => {
			console.log(prev, curr);
			if (curr.level === maxLevel) {
				return prev + curr.val;
			}
			return prev;
		}, 0);
	}

	return sum;
}

export default deepestLeavesSum;
