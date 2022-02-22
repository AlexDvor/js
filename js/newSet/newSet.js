const number = [
  1, 2, 2, 4, 4, 4, 4, 10, 10, 3, 6, 5, 8, 10, 22, 33, 22, 333, 33,
];

const string = ['masha', 'masha', 'masha', 'misha', 'alex', 'alex'];

// const set = new Set(string);
// const arr = [...set];

// const mySet = new Set();

// mySet.add(1); // Set { 1 }
// mySet.add(5); // Set { 1, 5 }
// mySet.add(5); // Set { 1, 5 }
// mySet.add('some text'); // Set { 1, 5, 'some text' }
// const o = { a: 1, b: 2 };
// mySet.add(o);
function getSet(arr) {
  const map = {};

  arr.forEach(element => {
    if (map[element]) {
      map[element] = map[element] + 1;
    } else {
      map[element] = 1;
    }
  });

  return map;
}

console.log(getSet(number));
