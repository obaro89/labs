const naiveStringSearch = (str, pattern) => {
    let count = 0;
    let i = 0;
    let j = 0;
    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < pattern.length; j++) {
            if (pattern[j] !== str[i + j]) break;
            if (j === pattern.length - 1) count++
        }
        
    }
    console.log("Found "+ count + " Match(es)")
}

naiveStringSearch("igbinobaroosaretin@gmail.com", "in")