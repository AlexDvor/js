const chooseOptimalDistance = (distance, quantity, list) => {
  if (list.length < quantity) return null;
  const subArray = creatSubarray(list, quantity);
  const totalSumArr = totalAmountArray(subArray);
  const result = compareDistance(totalSumArr, distance);
  return result;
};

function creatSubarray(arr, size) {
  let subArray = [];

  for (let i = 0; i < arr.length; i += 1) {
    subArray.push(arr.slice(i, i + size));
  }
  const result = subArray.filter(item => {
    if (item.length === size) return item;
  });
  console.log('creatSubarray', result);
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
