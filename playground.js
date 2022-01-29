let arr = [2,3,25,56,7,8,9,32,45,0]

console.log(arr.sort((a,b) => a - b))

var items = [
    { name: 'Edward', value: 21 },
    { name: 'Sharpe', value: 37 },
    { name: 'And', value: 45 },
    { name: 'The', value: -12 },
    { name: 'Magnetic', value: 13 },
    { name: 'Zeros', value: 37 }
  ];

  // items.sort((a,b)=> a.value - b.value)
  // console.log(items)

  let me =items.find(item => item.value === -12)
  let index = items.indexOf(me)
  items.splice(index, 1)
  console.log(items)