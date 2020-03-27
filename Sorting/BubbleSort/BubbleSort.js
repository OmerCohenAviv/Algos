function bubbleSort(arr) {
    const numOfIter = arr.length - 1;
    for (let i = 0; i < numOfIter; i++) {
        let checkIfSwap = false;
        for (let j = 0; j <  numOfIter - i; j++) {
            if (arr[j] > arr[j + 1]) {
                checkIfSwap = true;
                let temp = arr[j + 1];
                arr[j + 1] = arr[j];
                arr[j] = temp
            }
        }
        if (!checkIfSwap) return arr;
    }
    return arr;
}

console.log(bubbleSort([1,2,3]));
