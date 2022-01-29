const sumZero = (arr) => {
    let left = 0
    let right = arr.length - 1
    let result = []
    while (left < right) {
        let sum = arr[right] + arr[left]
        if (sum === 0) {
            return [arr[left],arr[right]]
        }else if (sum > 0) {
            right--
        }else {
            left++
        }
    }
   
}

let arr = [-4,-3,-2,-1,0,1,2,3,4]
console.log(sumZero(arr))