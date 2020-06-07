function capitalizeFirst(input) {

    if (typeof input === 'object' && input.length === 0) {
        return [];
    } else if (typeof input === 'object') {

        return [].concat(capitalizeFirst(input[0])).concat(capitalizeFirst(input.slice(1)));

    } else {

        return input.charAt(0).toUpperCase() + input.slice(1)

    }

}

console.log(capitalizeFirst(['parvez', 'dittia']))