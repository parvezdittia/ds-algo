function isPalindrome(str) {
	if (str.length <= 1) {
		return true;
	} else {
		return str[0] === str[str.length - 1] &&
			isPalindrome(str.substring(1, str.length - 1))
			? true
			: false;
	}
}

console.log(isPalindrome("abcba"));
