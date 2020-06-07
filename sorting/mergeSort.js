function merge(arr1, arr2) {

    let output = [];
    let i = 0, j = 0;

    while (i < arr1.length || j < arr2.length) {

        if (i === arr1.length) {

            output.push(arr2[j]);
            j++;

        } else if (j === arr2.length) {

            output.push(arr1[i]);
            i++;

        } else {

            if (arr1[i] < arr2[j]) {
                output.push(arr1[i]);
                i++;
            } else if (arr1[i] === arr2[j]) {
                output.push(arr2[j]);
                j++;
            } else {
                output.push(arr2[j]);
                j++;
            }

        }



    }

    return output;

}

function mergeSort(arr) {

    if (arr.length === 0 || arr.length === 1) {
        return arr;
    } else {
        let mid = Math.floor(arr.length / 2);
        let arr1 = mergeSort(arr.slice(0, mid));
        let arr2 = mergeSort(arr.slice(mid));
        let output = merge(arr1, arr2);
        return output;
    }


}


console.log(mergeSort([1, 3, 2]));