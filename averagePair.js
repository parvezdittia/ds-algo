function averagePair(arr, avg) {

    if(arr.length===0){
        return false;
    }

    let start = 0;
    let end = arr.length - 1;

    while(start !== end){

        let a = arr[start];
        let b = arr[end];

        if((a+b)/2 > avg){
            end--;
        } else if((a+b)/2 < avg) {
            start++;
        } else {
            return true;
        }

    }

    return false;

}

console.log(averagePair([], 4));