// function findLongestWordLength(str) {
//   const parse = str.split(" ");
//   const numbers = [];
//   for (let i = 0; i < parse.length; i += 1) {
//     numbers.push(parse[i].length);
//   }
//   console.log(numbers);
//   return Math.max(...numbers);
//   // const largest = Math.max(parse);
//   // return largest;
// }

// console.log(
//   findLongestWordLength("The quick brown fox jumped over the lazy dog")
// );
////////////////////////////////////////////////////////////////////////////////////////////////
// function findLongestWordLength(str) {
//   const parse = str.split(" ");
//   let biggestWord = parse[0].length;
//   for (let i = 0; i < parse.length; i += 1) {
//     if (biggestWord < parse[i].length) {
//       biggestWord = parse[i].length;
//     }
//   }
//   return biggestWord;
// }

// console.log(
//   findLongestWordLength("The quick brown fox jumped over the lazy dog")
// );
////////////////////////////////////////////////////////////////////////////////////////////////

// function largestOfFour(arr) {
//   const largestNumber = [];
//   for (const numbers of arr) {
//     const result = Math.max(...numbers);
//     largestNumber.push(result);
//   }
//   return largestNumber;
// }

// console.log(
//   largestOfFour([
//     [4, 5, 1, 3],
//     [13, 27, 18, 26],
//     [32, 35, 37, 39],
//     [1000, 1001, 857, 1],
//   ]),
// );
////////////////////////////////////////////////////////////////////////////////////////////////

// function confirmEnding(str, target) {
//   const targetLength = target.length;
//   const lastWordOfString = str.slice(-targetLength);
//   const result = lastWordOfString.includes(target);
//   console.log(result);
// }

// console.log(confirmEnding('Bastian', 'n')); // true
// console.log(confirmEnding('Congratulation', 'on')); // true
// console.log(confirmEnding('Open sesame', 'game'));
// console.log(confirmEnding('Connor', 'n')); // false
////////////////////////////////////////////////////////////////////////////////////////////////
// function repeatStringNumTimes(str, num) {
//   return num > 0 ? str + repeatStringNumTimes(str, num - 1) : '';
// }

// console.log(repeatStringNumTimes('abc', 3));
////////////////////////////////////////////////////////////////////////////////////////////////
// function truncateString(str, num) {
//   const parseString = str.slice(0, num);
//   if (str.length > num) {
//     return `${parseString}...`;
//   }
//   return str;
// }

// console.log(truncateString('A-tisket a-tasket A green and yellow basket', 8));
// console.log(truncateString('Absolutely Longer', 2));
// truncateString("A-tisket a-tasket A green and yellow basket", 8) should return the string A-tisket....

////////////////////////////////////////////////////////////////////////////////////////////////
// function findElement(arr, func) {
//   for (let i = 0; i < arr.length; i += 1) {
//     if (func(arr[i])) {
//       return arr[i];
//     }
//   }

//   return undefined;
// }

// console.log(
//   findElement([1, 3, 5, 8, 9, 10], function (num) {
//     return num % 2 === 0;
//   }),
// );

////////////////////////////////////////////////////////////////////////////////////////////////

// function booWho(bool) {
//   if (typeof bool === 'boolean') {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(booWho(true));
// console.log(booWho([1, 2, 3]));

////////////////////////////////////////////////////////////////////////////////////////////////

// function titleCase(str) {
//   const convertToArray = str.toLowerCase().split(' ');
//   const result = convertToArray.map(function (val) {
//     return val.replace(val.charAt(0), val.charAt(0).toUpperCase());
//   });
//   console.log(result);

//   return result.join(' ');
// }

// console.log(titleCase('sHoRt AnD sToUt')); //should return the string Short And Stout.

////////////////////////////////////////////////////////////////////////////////////////////////

// function frankenSplice(arr1, arr2, n) {
//   let localArray = arr2.slice(); // [4,5]
//   for (let i = 0; i < arr1.length; i++) {
//     localArray.splice(n, 0, arr1[i]);
//     // n++; // n+=1 // n=n+1
//   }
//   return localArray;
// }

// console.log(frankenSplice([1, 2, 3], [4, 5], 1)); //should return [4, 1, 2, 3, 5].

////////////////////////////////////////////////////////////////////////////////////////////////

// function bouncer(arr) {
//   const newArr = [];
//   for (const item of arr) {
//     if (item) {
//       newArr.push(item);
//     }
//   }
//   return newArr;
// }

// console.log(bouncer([7, 'ate', '', false, 9]));
////////////////////////////////////////////////////////////////////////////////////////////////

// function getIndexToIns(arr, num) {
//   const sort = arr.sort((a, b) => a - b);

//   for (let i = 0; i < sort.length; i++) {
//     if (sort[i] >= num) return i;
//   }

//   return sort.length;
// }
// console.log(getIndexToIns([40, 60], 50));
// ////////////////////////////////////////////////////////////////////////////////////////////////
// function mutation(arr) {
//   let target = arr[0].toLowerCase();
//   let test = arr[1].toLowerCase();
//   for (let i = 0; i < test.length; i += 1) {
//     if (target.indexOf(test[i]) < 0) return false;
//   }
//   return true;
// }

// console.log(mutation(['Hello', 'hey'])); //false
// console.log(mutation(['Alien', 'line']));

////////////////////////////////////////////////////////////////////////////////////////////////

// function chunkArrayInGroups(arr, size) {
//   // Break it up.
//   let newArr = [];
//   for (let i = 0; i < arr.length; i += size) {
//     newArr.push(arr.slice(i, i + size));
//   }
//   return newArr;

//   // let subarray = [];
//   // for (let i = 0; i < Math.ceil(size); i++) {
//   //   subarray[i] = arr.slice(i * size, i * size + size);
//   // }
//   // return subarray;
// }
// console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3));

////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////
