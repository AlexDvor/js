const chooseOptimalDistance = (s, arr) => {
  const subArray = creatSubarray(arr, s);

  return subArray;
};

function creatSubarray(arr, size) {
  let subarray = [];
  for (let i = 0; i <= size; i += 1) {
    subarray.push(arr.slice(i, i + size));
  }

  return subarray;
}
console.log(chooseOptimalDistance(2, [51, 56, 58, 59, 61])); //173)
// console.log(chooseOptimalDistance([51, 56, 58, 59, 61])); //173)
