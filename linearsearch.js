const linearSearch = (arr, item) => {
    for (let i = 0; i < arr.length; i++) {
        if(arr[i]=== item){
            return i
        }

    }
    return -1
}

console.log(linearSearch([1,2,3,3,4,5,9,6,0,8], 080))