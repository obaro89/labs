const twoSum = (arr, target) => {
    let p1 = 0;
    let p2 = 1;
    let noToFind;
    if(arr.length === 0 || arr.length < 2) return null

    while (true) {
        noToFind = target - arr[p1];
        if (arr[p2] === noToFind) {
            return [p1,p2]
        }else if (p2 === (arr.length - 1)){
            p1++;
            p2 = p1 + 1;
        }else if(p1 === (arr.length - 1)){
            return null
        }else 
        {
            p2++
        }
        

    }
    
}

console.log(twoSum([1,3,7,9,2], 11))