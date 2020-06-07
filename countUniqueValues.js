// function countUniqueValues(arr) {

//     let count = 1;

//     for (let fixed = 0, moving = 0; moving < arr.length; moving++) {

//         if (fixed !== moving && arr[fixed] !== arr[moving]) {
//             count++;
//             fixed = moving;
//         }

//     }

//     return count;

// }

function countUniqueValues(arr) {

    let count = 0;

    for (let i = 0; i < arr.length; i++) {

        if (arr[i - 1] !== arr[i]) {
            count++;
        }

    }

    return count;

}

console.log(countUniqueValues([1, 1, 1, 2, 3, 3]));