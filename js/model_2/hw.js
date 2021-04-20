// ---------------------------------------------------------------------
// Проверка пароля (ранний возврат)
// Задание
// Функция checkPassword получает пароль пользователя в параметр password, проверяет его на совпадение с паролем администратора в переменной ADMIN_PASSWORD и возвращает сообщение о результате сравнения.

// Проведи рефакторинг кода функции checkStorage используя паттерн «ранний возврат»:

// удали переменную message;
// удали else;
// код должен работать так же, как и до оптимизации.



// function checkPassword(password) {
//   const ADMIN_PASSWORD = 'jqueryismyjam';
//   // Пиши код ниже этой строки
  

//   if (password === ADMIN_PASSWORD) {
//     return 'Добро пожаловать!';
//   }
//     return 'Доступ запрещен, неверный пароль!';

// }

// ---------------------------------------------------------------------
// Склад товаров 3.0
// Задание
// Функция checkStorage проверяет возможность оформления заказа и возвращает сообщение о результате. Она принимает два параметра, значения которых будут задаваться во время её вызова.

// available - доступное количество товаров на складе;
// ordered - количество единиц товара в заказе.
// Проведи рефакторинг кода функции checkStorage используя паттерн «ранний возврат».

// function checkStorage(available, ordered) {
//   // Пиши код ниже этой строки
 
//   if (ordered === 0) {
//     return 'В заказе еще нет товаров';
//   } 
  
//   if (ordered > available) {
//     return 'Слишком большой заказ, на складе недостаточно товаров!';
//   }
  
//     return 'Заказ оформлен, с вами свяжется менеджер';
  
// }




// ---------------------------------------------------------------------

// Доступ к элементам по индексу
// Для доступа к значению элемента массива применяют синтаксис квадратных скобок массив[индекс]. Между именем переменной массива и квадратными скобками не должно быть пробела.

// Внимание
// Индексация элементов массива начинается с нуля.

// const planets = ['Земля', 'Марс', 'Венера'];
// planets[0]; // 'Земля'
// planets[2]; // 'Венера'
// Задание
// Объяви три переменные и присвой каждой из них значение, используя нотацию квадратных скобок.

// Имя переменной	Значение переменной
// firstElement	первый элемент массива
// secondElement	второй элемент массива
// lastElement	последний элемент массива


// const fruits = ['яблоко', 'слива', 'груша', 'апельсин'];
// const firstElement = fruits[0];
// const secondElement = fruits[1];
// const lastElement = fruits[3];


// ---------------------------------------------------------------------

// Переопределение значения элемента
// В отличии от строк, элементы массива можно изменять обратившись к ним по индексу и присвоив другое значение.

// const numbers = [1, 2, 3, 4, 5];
// numbers[0] = 7;
// numbers[2] = 14;
// console.log(numbers); // [7, 2, 14, 4, 5];
// Задание
// Переопредели значения элементов с индексами 1 и 3. Замени 'слива' на 'персик', а 'апельсин' на 'банан'.



// const fruits = ['яблоко', 'слива', 'груша', 'апельсин'];
// fruits[1] ='персик';
// fruits[3] ='банан';



// ---------------------------------------------------------------------

// Длина массива
// Длина массива, то есть число его элементов, хранится в свойстве length. Это динамическая величина, которая изменяется автоматически при добавлении или удалении элементов.

// const planets = ['Земля', 'Марс', 'Венера'];
// console.log(planets.length); // 3
// Задание
// Объяви переменную fruitsArrayLength и присвой ей длину массива fruits используя свойство length.



// const fruits = ['яблоко', 'персик', 'груша', 'банан'];
// const fruitsArrayLength = fruits.length; 



// ---------------------------------------------------------------------
// Индекс последнего элемента
// Чаще всего, мы заранее в коде не знаем какая будет длина массива. Для того, чтобы получить значение последнего элемента применяется следующий подход - длина массива всегда на единицу больше, чем индекс последнего элемента. Используя формулу длина_массива - 1 можно получить значение последнего элемента массива произвольной длины.

// const planets = ['Земля', 'Марс', 'Венера'];
// const lastElementIndex = planets.length - 1;
// planets[lastElementIndex]; // 'Венера'
// Задание
// Объяви две перемнные:

// Имя переменной	Ожидаемое значение
// lastElementIndex	индекс последнего элемента масcива fruits через длина_массива - 1
// lastElement	значение последнего элемента массива



// const fruits = ['яблоко', 'персик', 'груша', 'банан'];
// const lastElementIndex = fruits.length - 1;
// const lastElement =  fruits[lastElementIndex];



// ---------------------------------------------------------------------
// Крайние элементы массива
// Задание
// Напиши функцию getExtremeElements(array) которая принимает один параметр array - массив элементов произвольной длины. Функция должна возвращать массив из двух элементов - первого и последнего элемента параметра array.




// function getExtremeElements(array) {
//     const newArr = [];
//   	newArr.push(array[0]);
//   	newArr.push(array[array.length - 1]);
// 	return newArr;

//   }

// ---------------------------------------------------------------------
// Метод строк split()
// Метод split(delimeter) позволяет превратить строку в массив, «разбив» его по разделителю delimeter. Если разделитель это пустая строка, то получится массив отдельных символов. Разделителем может быть один или несколько символов.

// const name = 'Манго';
// console.log(name.split('')); // ['M', 'a', 'н', 'г', 'о']

// const message = 'JavaScript это интересно';
// console.log(message.split(' ')); // ['JavaScript', 'это', 'интересно']
// Задание
// Дополни код функции splitMessage(message, delimeter) так, чтобы она возвращала в переменной words результат разделения строки message по разделителю delimeter - массив строк.

// Тесты
// Объявлена функция splitMessage(message, delimeter).
// Вызов splitMessage('Манго спешит на поезд', ' ') возвращает ['Манго', 'спешит', 'на', 'поезд'].
// Вызов splitMessage('Манго', '') возвращает ['М', 'а', 'н', 'г', 'о'].
// Вызов splitMessage('лучшее_за_неделю', '_') возвращает ['лучшее', 'за', 'неделю'].



// function splitMessage(message, delimeter) {
//   let words;

//   words=message.split(`${delimeter}`);

//   return words;
// }




// ---------------------------------------------------------------------

// Гравировка украшений
// Задание
// Сервису гравировки украшений нужна функция, которая бы автоматически считала цену гравировки, в зависимости от количества слов и цены за слово.

// Объявлена функция calculateEngravingPrice(message, pricePerWord). Эта функция принимает строку, состоящую из слов разделённых только пробелами (параметр message) и цену гравировки одного слова (параметр pricePerWord).

// Напиши тело функции, чтобы она возвращала общую стоимость гравировки всех слов в строке.



// function calculateEngravingPrice(message, pricePerWord) {
//   let totalPrice = 0;
//   let words;

//     words = message.split(' ');
//     totalPrice = words.length * pricePerWord;
   
//     return totalPrice;
//  }

// console.log(calculateEngravingPrice('Bla bla bla',5))


// ---------------------------------------------------------------------

// Метод массива join()
// Метод массивов join(delimeter) позволяет соединить элементы массива в строку. В строке элементы будут разделены символом или группой символов указанных в delimeter. То есть это операция обратная методу строк split(delimeter).

// const words = ['JavaScript', 'это', 'интересно'];
// console.log(words.join('')); // 'JavaScriptэтоинтересно'
// console.log(words.join(' ')); // 'JavaScript это интересно'
// console.log(words.join('*')); // 'JavaScript*это*интересно'
// Задание
// Дополни код функции makeStringFromArray(array, delimeter) так, чтобы она возвращала в переменной string результат соединения элементов массива array c разделителем delimeter - строку.


// ---------------------------------------------------------------------
// Метод массива join()
// Метод массивов join(delimeter) позволяет соединить элементы массива в строку. В строке элементы будут разделены символом или группой символов указанных в delimeter. То есть это операция обратная методу строк split(delimeter).

// const words = ['JavaScript', 'это', 'интересно'];
// console.log(words.join('')); // 'JavaScriptэтоинтересно'
// console.log(words.join(' ')); // 'JavaScript это интересно'
// console.log(words.join('*')); // 'JavaScript*это*интересно'
// Задание
// Дополни код функции makeStringFromArray(array, delimeter) так, чтобы она возвращала в переменной string результат соединения элементов массива array c разделителем delimeter - строку.

// Тесты
// Объявлена функция makeStringFromArray(array, delimeter).
// Вызов makeStringFromArray(['Манго', 'спешит', 'на', 'поезд'], ' ') возвращает 'Манго спешит на поезд'.
// Вызов makeStringFromArray(['М', 'а', 'н', 'г', 'о'], '')) возвращает 'Манго'.
// Вызов makeStringFromArray(['лучшее', 'за', 'неделю'], '_') возвращает 'лучшее_за_неделю'.



// function makeStringFromArray(array, delimeter) {

//   let string;

//  string =array.join(`${delimeter}`);
 

//   return string;

// }

// console.log(makeStringFromArray(['bla','papa','mama','brother'],'*'))

// ---------------------------------------------------------------------
// ---------------------------------------------------------------------
// ---------------------------------------------------------------------
// ---------------------------------------------------------------------