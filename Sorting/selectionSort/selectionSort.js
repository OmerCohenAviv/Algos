function selectionSort(arr) {
    const numberOfIter = arr.length - 1;
    for (let i = 0; i < numberOfIter; i++) {
        let min = arr[i];
        let minIndex = i;
        for (let j = i; j < numberOfIter; j++) {
            if (arr[j + 1] < min) {
                minIndex = j + 1;
                min = arr[j + 1];
            }
        }
        let temp = arr[i];
        arr[i] = min;
        arr[minIndex] = temp
    }
    console.log(arr)
}

selectionSort([1,23,5,23,1,23,3,5,85])
