function getDigit(num, place) {

    let a = num % Math.pow(10, place + 1);
    let b = num % Math.pow(10, place);
    let c = (a - b) / Math.pow(10, place)
    return c;
}

function digitCount(num) {
    if (num === 0) return 1;
    return Math.floor(Math.log10(num)) + 1;
}

function mostDigits(arr) {

    let max = 0;

    for (let num of arr) {

        let count = digitCount(num);

        if (count > max) {
            max = count;
        }

    }

    return max;

}

function radixSort(arr) {

    let maxDigits = mostDigits(arr);

    for (let i = 0; i < maxDigits; i++) {

        let buckets = [[], [], [], [], [], [], [], [], [], []];


        while (arr.length > 0) {
            let digit = getDigit(arr[0], i);
            buckets[digit].push(arr.shift())
        }

        for (let j = 0; j < buckets.length; j++) {
            arr = arr.concat(buckets[j]);
            buckets[j] = [];
        }


    }

    return arr;
}

console.log(radixSort([23, 345, 5467, 12, 2345, 9852]));