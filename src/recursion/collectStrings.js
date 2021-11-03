// function collectStrings(input) {

//     if (typeof input === 'object') {

//         let arr = [];

//         for (let key in input) {

//             arr.concat(collectStrings(input[key]))

//             console.log(arr);

//         }

//         return arr;

//     } else if (typeof input === 'string') {

//         return [input]

//     }

// }

function collectStrings(input) {
	let arr = [];

	for (let key in input) {
		if (typeof input[key] === "string") {
			arr.push(input[key]);
		} else if (typeof input[key] === "object") {
			arr = arr.concat(collectStrings(input[key]));
		}
	}

	return arr;
}

const obj = {
	stuff: "foo",
	data: {
		val: {
			thing: {
				info: "bar",
				moreInfo: {
					evenMoreInfo: {
						weMadeIt: "baz",
					},
				},
			},
		},
	},
};

console.log(collectStrings(obj)); // ["foo", "bar", "baz"])
