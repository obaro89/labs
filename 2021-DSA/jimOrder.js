function jimOrders(orders) {
  //Write your code here
  let noOfCus = orders[0];
  let order = orders[1];
  let prep = orders[2];
  let result = [];
  let ans = [];

  for (let i = 0; i < order.length; i++) {
    result.push({
      customer: i + 1,
      time: order[i] + prep[i],
    });
  }
  result.sort((a, b) => a.time - b.time);
  result.forEach((res) => {
    ans.push(res.customer);
  });
  return ans;
}

let arr = [5, [8, 4, 5, 3, 4], [1, 2, 6, 1, 3]];
let arr2 = [3, [1, 2, 3], [3, 3, 3]];

console.log(jimOrders(arr2));
