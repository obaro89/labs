let arr = [2,1,3,44,5,6,5,7,21,32,42,60,22,31,13,16,19,12]

// const bubbleSort = (arr) => {
//     for (let i = 0; i < arr.length; i++) {
//         for (j = 0; j < arr.length; j++) {
//             if (arr[j] > arr[j + 1]) {
//                 //Swap
//                 var temp = arr[j]
//                 arr[j] = arr[j+1]
//                 arr[j+1] = temp
//             }
//         }
//     }
//     return arr
// }

const bubbleSort = (arr) => {
    var  noSwaps;
    for (let i = arr.length; i > 0; i--) {
        for (j = 0; j < i - 1; j++) { 
            noSwaps = true;
            if (arr[j] > arr[j + 1]) {
                //Swap
                var temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
                noSwaps = false;
            }
            if (noSwaps) break;
        }
    }
    return arr
}

bubbleSort([62,57,27,16,100,90,88,19, 25, 32, 45, 56])
console.log(bubbleSort([62,57,27,16,100,90,88,19, 25, 32, 45, 56]))