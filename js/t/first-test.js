const chooseOptimalDistance = (distance, quantity, list) => {
  const test = creatCollection(list, quantity);
  const sum = totalAmountArray(test);
  const comp = compareDistance(sum, distance);
  return comp;
};

function creatCollection(arr, length) {
  const results = new Map();

  const recurs = (size, j) => {
    if (size)
      arr.forEach((el, i) => {
        const m = new Map(j);
        m.set(i, el);
        recurs(size - 1, m);
      });
    else if (j.size === length) {
      const keys = Array.from(j.keys()).sort();
      const value = Array.from(j.values()).sort();
      results.set(keys, value);
    }
  };

  recurs(length, new Map());

  const newArr = filterArr(results);

  return newArr;
}

function totalAmountArray(arr) {
  const result = arr.map(items => {
    return items.reduce((acc, value) => acc + value, 0);
  });

  return result;
}

function filterArr(arr) {
  const newArr = [];
  arr.forEach(value => newArr.push(value));
  return newArr;
}

function compareDistance(arr, goal) {
  const result = arr.reduce((prev, curr) => {
    return Math.abs(curr - goal) < Math.abs(prev - goal) ? curr : prev;
  });
  if (result > sum && presum <= t) sum = presum;
  return result;
}

console.log(chooseOptimalDistance(174, 3, [51, 56, 58, 59, 61])); //173)

// https://stackoverflow.com/questions/9960908/permutations-in-javascript

///////////////////////////////////////////////////////////////

// const chooseBestDistance = (t, k, ls) => {
//   let sum = 0;
//   const results = new Map();
//   const recurs = (n, j) => {
//     if (n)
//       ls.forEach((el, i) => {
//         const m = new Map(j);
//         m.set(i, el);
//         recurs(n - 1, m);
//       });
//     else if (j.size === k) {
//       const keys = Array.from(j.keys()).sort().join('');
//       const vals = Array.from(j.values());
//       results.set(keys, vals);
//     }
//   };

//   recurs(k, new Map());

//   console.log(
//     'Variants:',
//     Array.from(results.keys()).join(),
//     '\nTotal:',
//     results.size,
//   );

//   for (let value of results.values()) {
//     const presum = value.reduce((acc, el) => (acc += el), 0);
//     if (presum > sum && presum <= t) sum = presum;
//   }

//   return sum || null;
// };

// console.time('sum');
// console.log(chooseBestDistance(1749, 4, [51, 56, 58, 59, 61, 1277, 677]));
// console.timeEnd('sum');
