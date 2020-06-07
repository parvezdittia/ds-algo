function someRecursive(arr, fn) {

    if (arr.length === 1) {

        return fn(arr[0]);

    } else {

        if (fn(arr[0])) {
            return true;
        } else {
            return someRecursive(arr.slice(1), fn);
        }

    }


}

const isOdd = val => val % 2 !== 0;

console.log(someRecursive([4, 6, 8], val => val > 10))