const swap = (arr1, arr2) => {
    // let temp = arr1;
    // arr1 = arr2;
    // arr2 = temp
    // console.log(arr1, arr2)
    [arr1, arr2] = [arr2, arr1]
    console.log(arr1, arr2)
}

swap(5,4)