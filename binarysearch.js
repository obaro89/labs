const binarySearch = (arr, val) => {
    let left = 0;
    let right = arr.length - 1;
    let middle;
    while (left < right) {
       middle = Math.floor((left + right)/2)
        if(arr[middle] == val) {
            return middle;
        }else if (val > arr[middle]) {
            left = middle
        }else if (val < arr[middle]) {
            right = middle
        }
    }
    return -1
}

console.log(binarySearch([1,2,3,4,5,6,7,8,9,10], 7))