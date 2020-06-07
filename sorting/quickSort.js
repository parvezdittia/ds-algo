function pivot(arr, start, end) {

    let pivotElement = arr[start];
    let pivot = start;

    for (let i = start + 1; i <= end; i++) {

        if (arr[i] < pivotElement) {
            pivot++;
            let temp = arr[pivot];
            arr[pivot] = arr[i];
            arr[i] = temp;
        }

    }

    let temp = arr[pivot];
    arr[pivot] = pivotElement;
    arr[start] = temp;
    return pivot;

}

function quickSort(arr, start = 0, end = arr.length - 1) {

    if (start >= end) {
        return;
    } else {

        let pivotPoint = pivot(arr, start, end);
        quickSort(arr, start, pivotPoint - 1);
        quickSort(arr, pivotPoint + 1, end);
        return arr;

    }



}


console.log(quickSort([4, 6, 9, 1, 2, 5, 3]));