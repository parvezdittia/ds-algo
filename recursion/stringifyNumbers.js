// function stringifyNumbers(input) {

//     if (typeof input === 'object') {

//         for (let key in input) {

//             input[key] = stringifyNumbers(input[key])

//         }

//         return input;

//     } else if (typeof input === 'number') {

//         return input.toString();

//     } else {

//         return input;

//     }

// }

function stringifyNumbers(obj) {
	for (let key in obj) {
		if (typeof obj[key] === "number") {
			obj[key] = obj[key].toString();
		} else if (typeof obj[key] === "object" && !Array.isArray(obj[key])) {
			obj[key] = stringifyNumbers(obj[key]);
		}
	}

	return obj;
}

console.log(
	stringifyNumbers({
		num: 1,
		test: [],
		data: {
			val: 4,
			info: {
				isRight: true,
				random: 66,
			},
		},
	})
);
