function reverse(str) {
	if (str === "") {
		return "";
	} else {
		return reverse(str.substring(1)) + str[0];
	}
}

console.log(reverse("parvez"));
