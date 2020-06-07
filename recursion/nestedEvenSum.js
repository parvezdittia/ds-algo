function nestedEvenSum(input) {

    let sum = 0;

    if (typeof input === 'object') {

        for (let key in input) {

            sum += nestedEvenSum(input[key])

        }

        return sum;

    } else if (typeof input === 'number' && input % 2 === 0) {

        return input;

    } else {

        return 0;

    }

}

console.log(nestedEvenSum({
    a: 2,
    b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
    c: { c: { c: 2 }, cc: 'ball', ccc: 5 },
    d: 1,
    e: { e: { e: 2 }, ee: 'car' }
}))