const chooseOptimalDistance = (distance, quantity, list) => {
  // if (list.length < quantity) return null;
  // const subArray = creatSubarray(list, quantity);
  // const result = compareDistance(totalSumArr, distance);
  // const a = totalAmountArray(result);
  const test = testFun(list);

  // const result = testA(list);

  return test;
};

let indexItem = 0;
let secondElemet = 1;
const newArr = [];

function testFun(array) {
  for (let index = 0; index < array.length; index++) {
    const b = array.slice(index, index + 3);
    console.log('b:', b);
    const a = [array[indexItem], array[secondElemet], array[index + 2]];
    newArr.push(a);
  }

  indexItem += 1;
  secondElemet += 1;
  if (indexItem === array.length) return;

  testFun(array);

  return newArr;
}

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

function filterArr(arr, size) {
  const res = arr.filter(item => {
    if (item.length === size) return item;
  });

  return res;
}

function compareDistance(arr, goal) {
  const result = arr.reduce((prev, curr) => {
    return Math.abs(curr - goal) < Math.abs(prev - goal) ? curr : prev;
  });

  return result;
}

// function testA(arr) {
//   let result = [];

//   const permute = (arr, m = []) => {
//     if (arr.length === 0) {
//       result.push(m);
//     } else {
//       for (let i = 0; i < arr.length; i++) {
//         let curr = arr.slice();
//         // console.log('curr', curr);
//         let next = curr.splice(i, 1);
//         // console.log('next', next);
//         permute(curr.slice(), m.concat(next));
//       }
//     }
//   };

//   permute(arr);

//   return result;
// }

// console.log(chooseOptimalDistance(174, 3, [51, 56, 58, 59, 61])); //173)
console.log(chooseOptimalDistance(174, 3, [51, 56, 58, 59, 61])); //173)
// console.log(chooseOptimalDistance(174, 3, [1, 2, 3, 4])); //173)
const a = [1, 2, 3, 4, 5];
const b = a.slice(1, -1);
console.log(b);
