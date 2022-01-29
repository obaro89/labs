function jumpingOnClouds(c) {
  // Write your code here
  let jumps = 0;
  let position = 0;
  while (true) {
    if (c[position + 2] == 0) {
      jumps++;
      position += 2;
    } else if (c[position + 1] == 0) {
      jumps++;
      position += 1;
    } else {
      break;
    }
    if (position >= c.length - 1) break;
  }
  return jumps;
}

console.log(jumpingOnClouds([0, 0, 1, 0, 0, 1, 1, 0, 1, 0]));
