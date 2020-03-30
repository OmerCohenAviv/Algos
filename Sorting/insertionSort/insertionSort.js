function insertionSort(arr) {
    const numberOfIter = arr.length - 1;
    for (let i = 1; i <= numberOfIter; i++) {
        let placedNum = false;
        for (let j = i; j > 0 && !placedNum; j--) {
            if (arr[j] >= arr[j - 1]) {
                placedNum = true;
            }
            else {
                let temp = arr[j];
                arr[j] = arr[j - 1];
                arr[j-1] = temp
            }
        }
    }
    return arr
}

insertionSort([5,4,3,2,1])
