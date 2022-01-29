[1,2,2,3,4,5,5,6,6,7,8,8,9]
// const countUniques = (arr) => {
//     if (arr.length === 0) return 0;
//     let i = 0;
//     for (j = 1; j < arr.length; j++) {
//         if (arr[i] !== arr[j]) {
//             i++;
//             arr[i]=arr[j]
//         }
//     }
//     return i + 1;
// }

const countUniques = (arr) => {
    //this also works by converting the set data into an array by using the spread operator
    // const unique = [...new Set (arr)]
    //then return the length of the unique array.
    // return unique.length

    const unique = new Set (arr)
    return unique.size
}

console.log(countUniques([1,2,2,3,4,5,5,6,6,7,8,8,9]))