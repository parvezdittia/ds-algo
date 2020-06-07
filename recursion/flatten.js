function flatten(input) {

    if (typeof input === 'object' && input.length === 0) {

        return [];

    } else if (typeof input === 'object') {

        return [].concat(flatten(input[0])).concat(flatten(input.slice(1)));

    } else {

        return [input];

    }

}

console.log(flatten([[1], [[2]], [3, [4]]]));