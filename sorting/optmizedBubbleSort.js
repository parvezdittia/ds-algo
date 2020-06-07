function optimizedBubbleSort(arr) {

    let i = arr.length - 1;

    while (i != 0) {

        let k = 0;

        for (let j = 0; j < i; j++) {

            console.log(arr, arr[j], arr[j + 1]);

            if (arr[j] > arr[j + 1]) {
                k = j;
                let temp = arr[j + 1];
                arr[j + 1] = arr[j];
                arr[j] = temp;
            }


        }

        i = k;

        console.log('one pass')



    }

    console.log(arr)

}

optimizedBubbleSort([4, 3, 2, 1]);
