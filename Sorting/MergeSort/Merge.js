function mergeSortedArrs(arrOne, arrTwo) {
    let i = 0;
    let j = 0;
    let resultArr = [];
    while (i <= arrOne.length - 1 && j <= arrTwo.length - 1) {
        if (arrOne[i] === arrTwo[j]) {
            resultArr.push(arrOne[i]);
            resultArr.push(arrTwo[j]);
            i++;
            j++;
            continue;
        }
        if (arrOne[i] > arrTwo[j]) {
            resultArr.push(arrTwo[j]);
            j++;
            continue;
        }
        if (arrTwo[j] > arrOne[i]) {
            resultArr.push(arrOne[i]);
            i++;
        }
    }
    if (!arrOne[i]) {
        resultArr.push(...arrTwo.slice(j));
    };
    if (!arrTwo[j]) {
        resultArr.push(...arrOne.slice(i))
    };
    return resultArr
}
mergeSortedArrs([2,3,5,10,15,25], [0])

function splitArray(arr) {
    let middleOfArr = Math.floor(arr.length / 2);
    const leftHalf = [...arr.slice(0, middleOfArr)]
    const rightHalf = [...arr.slice(middleOfArr, arr.length)]
    return ({
        leftHalf,
        rightHalf
    })
}


function mergeSort(arr) {
    if (arr.length <= 1) return arr;
    const splittedArr = splitArray(arr);
    const { leftHalf, rightHalf } = splittedArr
    const left = mergeSort(leftHalf)
    const right = mergeSort(rightHalf)
    return (left, right)
}
