const chooseOptimalDistance = (distance, quantity, list) => {
  const collection = creatCollection(list, quantity);
  const total = totalAmountArray(collection);
  const result = compareDistance(total, distance);
  return result;
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

function compareDistance(items, goal) {
  let distance = 0;
  for (let item of items) {
    if (item > distance && item <= goal) distance = item;
  }
  return distance || null;
}

console.log(chooseOptimalDistance(174, 3, [51, 56, 58, 59, 61])); //173)

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

//
// Завдання до виконання мовою JavaScript
// Ділан і Кейт хочуть подорожувати між кількома містами А, В, С.... Кейт має на аркуші паперу список відстаней між цими містами. ls = [51, 56, 58, 59, 61]. Ділан втомився їздити, і він каже Кейт, що не хоче їхати більше t = 174 милі, і він відвідає лише 3 міста. Які відстані, а отже, які міста вони оберуть, щоб сума відстаней була якомога більшою, щоб догодити Кейт та Ділану?

// Приклад:
// Маючи список ls та 3 міста для відвідування, вони можуть зробити вибір між: [51,56,58], [51,56,59], [51,56,61], [51,58,59], [51, 58,61], [51,59,61], [56,58,59], [56,58,61], [56,59,61], [58,59,61].

// Тоді суми відстаней складають: 165, 166, 168, 168, 170, 171, 173, 175, 176, 178.

// Найбільшою можливою сумою з урахуванням обмеження в 174 є 173, а відстані до 3 відповідних міст - [56, 58, 59].

// Функція chooseOptimalDistance приймає параметри:
// t (максимальна сума відстаней, ціле число >= 0),
// k (кількість міст, які потрібно відвідати, k> = 1),
// ls (список відстаней, всі відстані є додатними або нульовими цілими числами, і цей список містить принаймні один елемент).

// Функція повертає "найкращу" суму, тобто найбільшу можливу суму k відстаней, менших або рівних заданій межі t, якщо ця сума існує, або якщо не існує - null.
// Примітка: не змінюйте змінну ls.

// Важливо: треба вирішити завдання для будь-якого k, а не тільки 3.

// Початковий код
// const chooseOptimalDistance = (t, k, ls) => {
//     // твій код
//     return null;
// }

// chooseOptimalDistance(174, 3, [51, 56, 58, 59, 61]); //173
// chooseOptimalDistance(163, 3, [50]); // null
