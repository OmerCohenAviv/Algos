function getNum(num, position) {
       return Math.floor(Math.abs(num) / Math.pow(10, position)) % 10
}
function getBound(arr) {
    function setMax(currentMax, num) {
        if (num > currentMax) {
            return num;
        }
        else return currentMax
    }
    let max = -Infinity;
    for (let num of arr) {
         max = setMax(max, num);
    }
    return [ ...(max + "")].length;
}
function radixSort(arr) {
    let buckets = [];
    //get bound (Max digit number)
    const bound = getBound(arr);
    // Loop number of buckets
    for (let i = 0; i < bound; i++) {
        //Create Buckets;
        for (let i = 0; i < 10; i++) {
            buckets = [...buckets, []];
        }
        //Loop on each number of the array and insert it into a bucket
       for (let j = 0; j < arr.length; j++) {
           // get which bucket a number should go
           const bucketPos = getNum(arr[j], i);
           // set inside the bucket
           buckets[bucketPos] = [...buckets[bucketPos], arr[j]];
       }
       //Merge the buckets into the array
        arr = [];
       for (let k of buckets) {
           arr = [...arr, ...k];
       }
       buckets = [];
    }
    return arr
}
console.log(radixSort([5,23,5,7,234,2,7456]))
