function capitalizeWords(input) {

    if (typeof input === 'object' && input.length === 0) {
        return [];
    } else if (typeof input === 'object') {

        return [].concat(capitalizeWords(input[0])).concat(capitalizeWords(input.slice(1)));

    } else {

        return input.toUpperCase()

    }

}

console.log(capitalizeWords(['parvez', 'dittia']))