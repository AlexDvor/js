// const permutator = inputArr => {
//   let result = [];

//   const permute = (arr, m = []) => {
//     if (arr.length === 0) {
//       result.push(m);
//     } else {
//       for (let i = 0; i < arr.length; i++) {
//         let curr = arr.slice();
//         let next = curr.splice(i, 1);
//         permute(curr.slice(), m.concat(next));
//       }
//     }
//   };

//   permute(inputArr);

//   return result;
// };

// permutator(['c','a','t']);

// [ [ 'c', 'a', 't' ],
//   [ 'c', 't', 'a' ],
//   [ 'a', 'c', 't' ],
//   [ 'a', 't', 'c' ],
//   [ 't', 'c', 'a' ],
//   [ 't', 'a', 'c' ] ]

// permutator([1,2,3]);

// [ [ 1, 2, 3 ],
//   [ 1, 3, 2 ],
//   [ 2, 1, 3 ],
//   [ 2, 3, 1 ],
//   [ 3, 1, 2 ],
//   [ 3, 2, 1 ] ]
