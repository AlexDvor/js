const chooseOptimalDistance = (distance, quantity, list) => {
  // if (list.length < quantity) return null;
  const subArray = creatSubarray(list, quantity);
  // const result = compareDistance(totalSumArr, distance);
  const result = test(list);
  const a = totalAmountArray(result);

  return subArray;
};

function creatSubarray(arr, size) {
  let subArray = [];

  for (let i = 0; i < arr.length; i += 1) {
    subArray.push(arr.slice(i, i + size));
  }

  // const result = subArray.filter(item => {
  //   if (item.length === size) return item;
  // });
  // console.log('creatSubarray', result);
  return subArray;
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

function test(arr) {
  let result = [];

  const permute = (arr, m = []) => {
    if (arr.length === 0) {
      result.push(m);
    } else {
      for (let i = 0; i < arr.length; i++) {
        let curr = arr.slice();
        // console.log('curr', curr);
        let next = curr.splice(i, 1);
        // console.log('next', next);
        permute(curr.slice(), m.concat(next));
      }
    }
  };

  permute(arr);

  return result;
}

// console.log(chooseOptimalDistance(174, 3, [51, 56, 58, 59, 61])); //173)
console.log(chooseOptimalDistance(174, 3, [51, 56, 58, 59])); //173)
// console.log(chooseOptimalDistance(174, 3, [1, 2, 3, 4])); //173)
