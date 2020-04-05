
function pivotHelper(arr, start = 0, end = arr.length - 1) {
    function swap(arr,i, j) {
        const temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        return arr;
    }
    const pivot = arr[start];
    let swapIndex = start;
    for (let i = start + 1; i < arr.length; i++) {
        if (pivot > arr[i]) {
            swapIndex++;
            swap(arr, swapIndex, i);
        }
    }
    swap(arr, start, swapIndex);
    return swapIndex
}

function quickSort(arr, left = 0, right = arr.length - 1) {
    if (left < right) {
        const pivotIndex = pivotHelper(arr, left, right);
        quickSort(arr, left, pivotIndex - 1);
        quickSort(arr, pivotIndex + 1, right);
    }
    return arr
}

let arr = [4,8,2,1  ,5,7,6,3]
console.log(quickSort(arr))
