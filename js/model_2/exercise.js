// ---------------------------------------------------------------------
// const planets = ['Земля', 'Марс', 'Венера'];
// console.log(planets.length);

// ---------------------------------------------------------------------

// const fruits = ['яблоко', 'персик', 'груша', 'банан', 'apple'];
// const lastElementIndex = fruits.length - 1;
// const lastElement = fruits[lastElementIndex];
// console.log(lastElement)


// // ---------------------------------------------------------------------

// Напиши скрипт поиска самого маленького числа в масиве, при условие что числа не повторяються.


// const numbers = [51, 18, 13, 24, 7, 85, 19];
// let smallestNumber = numbers[0];

// for (const number of numbers) {
//     if (number < smallestNumber) {
//         smallestNumber = number;
//     }
// }
//    console.log('Найменше число : ',  smallestNumber);




// ---------------------------------------------------------------------

//   Напиши функцию calculateTotalPrice(items)
// которая принимает массив цен(чисел) и возвращает их сумму

// Option 1


// const cart = [54, 26, 155, 70, 355, 200, 10, 50, 60, 90, 12, 30];
// const cart = [50, 50];
// let total = 0;

// for (const value of cart) {
//     // total = total + value;
//     total += value;
// }
// console.log('Total: ', total);



// Option 2


// const calculateTotalPrice = function (items) {
//     let total = 0;

//     for (const item of items) {
//         total += item;
//     }
//     return total;
// }

// const res = calculateTotalPrice([2, 2, 2, 2])
// console.log(`Общая сумма покупок: ${res}`,)





// ---------------------------------------------------------------------
// * Псевдомассив arguments и Array.from и ...
//  */

// const fn = function () {
//   console.log(arguments);

//   const args = Array.from(arguments);

//   console.log(args);
// };

// fn(1, 2, 3);
// fn(1, 2, 3, 4, 5);
// fn(1, 2, 3, 4, 5, 6, 7);

// const fn = function (a, b, c, ...args) {
//   console.log(`${a} ${b} ${c}`);
//   console.log(args);
// };

// fn('hello', 1, 2, 3);
// fn('aloha', 1, 2, 3, 4, 5);
// fn('hi', 1, 2, 3, 4, 5, 6, 7);

/*
 * Напиши функцию add для сложения произвольного количества аргументов (чисел)
 * - Операция ... (rest)
 */

// const add = function (...args) {
//   console.log(args);
//   let total = 0;

//   for (const arg of args) {
//     total += arg;
//   }

//   return total;
// };

// console.log(add(1, 2, 3));
// console.log(add(1, 2, 4, 5, 6));

/*
 * Напиши функцию filterNumbers(array [, number1, ...]) которая:
 * - первым аргументом принимает массив чисел
 * - после первого аргумента может быть произвольное количество других аргументов которые будут числами.
 * - Функция должна вернуть новый массив, в котором будут только те аргументы, начиная со второго,
 *   для которых есть аналог в оригинальном массиве.
 */

// const filterNumbers = function (array, ...args) {
//   console.log('array: ', array);
//   console.log('args: ', args);
//   const uniqueElements = [];

//   for (const element of array) {
//     if (args.includes(element)) {
//       uniqueElements.push(element);

//       console.log(`${element} есть везде!`);
//     }
//   }

//   return uniqueElements;
// };

// console.log(filterNumbers([1, 2, 3, 4, 5], 10, 15, 2, 3, 8)); // [2, 3]
// console.log(filterNumbers([10, 15, 25, 30], 23, 30, 18, 15)); // [30, 15]
// console.log(filterNumbers([100, 200, 300, 400, 500], 7, 12, 200, 64)); // [200]



// ---------------------------------------------------------------------
const cart = [54, 26, 155, 70, 355, 200, 10, 50, 60, 90, 12, 30];
console.log()


function getExtremeElements(array) {
 for( i=0; i<array; i+=1);
  console.log(array)
}
  


// ---------------------------------------------------------------------
// ---------------------------------------------------------------------
// ---------------------------------------------------------------------
// ---------------------------------------------------------------------
// ---------------------------------------------------------------------
// ---------------------------------------------------------------------
// ---------------------------------------------------------------------
