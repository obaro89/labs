function maximumToys(prices, k) {
  // Write your code here
  //k is the budget
  prices.sort((a, b) => a - b);
  let maxToys = 0;
  prices.forEach((price) => {
    k = k - price;
    if (k >= 0) {
      maxToys++;
    }
  });
  return maxToys;
}

console.log(maximumToys([1, 2, 4, 7, 9, 33, 5], 25));
