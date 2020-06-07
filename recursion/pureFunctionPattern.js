function pureFunctionPattern(arr) {

    if (arr.length === 0) {
        return [];
    }

    let oddArr = [];
    let head = arr[0];

    if (head % 2 !== 0) {
        oddArr.push(head);
    }

    return oddArr.concat(pureFunctionPattern(arr.slice(1)));


}

console.log(pureFunctionPattern([1, 2, 3, 4, 5, 6, 7]))
