function countingValleys(steps, path) {
  // Write your code here
  let seaLevel = 0;
  let valleyCount = 0;
  let currentPosition;
  for (let i = 0; i < steps; i++) {
    if (path[i] === "U") {
      seaLevel++;
    } else {
      seaLevel--;
    }
    currentPosition =
      seaLevel > 0 ? "Mountain" : seaLevel < 0 ? "Valley" : currentPosition;

    if (seaLevel === 0 && currentPosition === "Valley") {
      valleyCount++;
    }
  }
  return valleyCount;
}

console.log(countingValleys(8, "DDUUUUDD"));
