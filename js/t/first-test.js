const chooseOptimalDistance = (distance, quantity, list) => {
  const subArray = creatSubarray(list, quantity);
  const totalSumArr = totalAmountArray(subArray);
  const result = compareDistance(totalSumArr, distance);

  return result;
};

function creatSubarray(arr, size) {
  let subarray = [];

  for (let i = 0; i < arr.length; i += 1) {
    subarray.push(arr.slice(i, i + size));
  }
  const result = subarray.filter(item => {
    if (item.length === size) return item;
  });

  return result;
}

function totalAmountArray(arr) {
  const result = arr.map(items => {
    return items.reduce((acc, value) => acc + value, 0);
  });

  return result;
}

function compareDistance(arr, goal) {
  const result = arr.reduce((prev, curr) => {
    return Math.abs(curr - goal) < Math.abs(prev - goal) ? curr : prev;
  });

  return result;
}

console.log(chooseOptimalDistance(174, 3, [51, 56, 58, 59, 61])); //173)
