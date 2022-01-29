const array = [3, 3, 2, 1, 3, 6, 8, 6, 6, 6, 8];
const equalizeArray = (array) => {
  let obj = {};
  array.forEach((e) => (obj[e] = obj[e] + 1 || 1));

  let max = Math.max(...Object.values(obj));
  let maxKey = Object.keys(obj).find((key) => obj[key] == max);

  return array.length - max;
};

console.log(equalizeArray(array));
