function getOddNumbers(arr) {

    let oddArr = [];

    function helper(arr) {

        if (arr.length === 0) {
            return;
        }

        let head = arr[0];

        if (head % 2 !== 0) {
            oddArr.push(head)
        }
        helper(arr.slice(1));

    }

    helper(arr);

    return oddArr;


}

console.log(getOddNumbers([1, 2, 3, 4, 5, 6, 7]))