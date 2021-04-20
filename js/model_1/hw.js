// const productName ='Дроид';
// const pricePerItem = 3500;
// const message=`Вы выбрали ${productName}, цена за штуку ${pricePerItem} кредитов.`;
// console.log(message);


// const pricePerDroid = 800;
// const orderedQuantity = 6;
// const deliveryFee = 50;
// const totalPrice = pricePerDroid * orderedQuantity + deliveryFee; 
// const message = `Вы заказали дроидов на сумму ${totalPrice} кредитов. Доставка (${deliveryFee} кредитов) включена в сумму заказа.`;




//-------------------------------------------------------------------------------------------------
// Функция getDiscount(totalSpent) определяет значение скидки в зависимости от общей суммы потраченных денег (параметр totalSpent) в магазине за всё время (партнёрская программа). Скидка записывается в переменную discount и возвращается из функции как результат её работы.

// Используя ветвления и логические операторы, дополни код функции.

// Если потрачено от 50000 ( включительно ) или больше кредитов - скидка 10% (золотой партнёр)
// Если потрачено от 20000 (включительно) до 50000 кредитов - скидка 5% (серебрянный партнёр)
// Если потрачено от 5000 (включительно) до 20000 кредитов - скидка 2% (бронзовый партнёр)
// Если потрачено меньше чем 5000 кредитов - скидка 0 (базовый партнёр)
// Значения скидок каждого уровня хранятся в одноимённых константах BASE_DISCOUNT, BRONZE_DISCOUNT, SILVER_DISCOUNT и GOLD_DISCOUNT.

// function getDiscount(totalSpent) {
//   const BASE_DISCOUNT = 0;
//   const BRONZE_DISCOUNT = 0.02;
//   const SILVER_DISCOUNT = 0.05;
//   const GOLD_DISCOUNT = 0.1;
//   let discount;
//   if (totalSpent>=50000) {
//     discount = GOLD_DISCOUNT;
//   } else if (totalSpent>=20000) {
//      discount = SILVER_DISCOUNT;
//   } else if (totalSpent>=5000) {
//     discount = BRONZE_DISCOUNT;
//   } else {
//     discount = BASE_DISCOUNT;
//   }
 
//   return discount;
// }


//-------------------------------------------------------------------------------------------------
// Тернарный оператор используется как более синтаксически краткая замена инструкции if...else, когда одной и той же переменной необходимо присвоить разные значения по условию.

// <условие> ? <выражение если условие истинно> : <выражение если условие ложно>
// Работает по такой схеме:

// Вычисляется условие.
// Если условие истинно, то есть приводится к true, вычисляется выражение после ?.
// Если условие ложно, то есть приводится к false, вычисляется выражение после :.
// Значение вычисленного выражения возвращается как результат работы тернарного оператора.
// let type;
// const age = 20;

// if (age >= 18) {
//   type = 'adult';
// } else {
//   type = 'child';
// }

// console.log(type); // 'adult'
// Выполним рефакторинг, заменив if...else тернарным оператором.

// const age = 20;
// const type = age >= 18 ? 'adult' : 'child';
// console.log(type); // 'adult'
// Внимание
// Тернарный оператор должен использоваться в простых операциях присваивания или возврата. Применять его для замены сложных ветвлений — плохая практика (антипаттерн).

// Задание
// Выполни рефакторинг решения задачи «Склад товаров», заменив инструкцию if...else тернарным оператором.

// function checkStorage(available, ordered) {
//   let message;
//   // Пиши код ниже этой строки

//   if (ordered > available) {
//     message = 'На складе недостаточно товаров!';
//   } else {
//     message = 'Заказ оформлен, с вами свяжется менеджер';
//   }

//   // Пиши код выше этой строки
//   return message;


//    RESOLUTION
// function checkStorage(available, ordered) {
//   let message;

//   message = ordered > available ? 'На складе недостаточно товаров!' : 'Заказ оформлен, с вами свяжется менеджер';
  
//   return message;


//-------------------------------------------------------------------------------------------------
// Функция checkPassword(password) сравнивает переданный ей пароль (параметр password) с сохранённым паролем администратора (константа ADMIN_PASSWORD) и возвращает строку с сообщением о результате.

// Используя тернарный оператор дополни функцию так, что:

// Если значения password и ADMIN_PASSWORD совпадают, присвой переменной message строку 'Доступ разрешен'.
// В противном случае, присвой message строку 'Доступ запрещен, неверный пароль!'.


// function checkPassword(password) {
//   const ADMIN_PASSWORD = 'jqueryismyjam';
//   let message;
// message = password===ADMIN_PASSWORD ? 'Доступ разрешен': 'Доступ запрещен, неверный пароль!';
//   return message;
// }



//-------------------------------------------------------------------------------------------------


// Инструкция switch
// В некоторых случаях неудобство чтения сложных ветвлений if...else можно избежать, используя более «плоский» синтаксис инструкции ветвления switch.

// Область применения switch ограничена задачами с одним общим вопросом (что сравнивать) и множеством вариантов ответов (с чем сравнивать).

// switch (значение) {
//   case значение:
//     инструкции;
//     break;

//   case значение:
//     инструкции;
//     break;
// }
// Его синтаксис состоит из блока switch(значение) - что нужно сравнить и множества отдельных случаев case значение - с чем нужно сравнить. Для сравнения используется оператор строгого равенства ===. То есть нельзя сравнить на больше или меньше, только на равенство.

// Значение в блоке switch(значение) - строка или число, которое сравнивается на строгое равенство со всеми значениями в блоках case значение по порядку, сверху вниз.

// Оператор break в завершении каждого блока case необходим, чтобы прервать дальнейшие проверки и сразу перейти к коду за switch в том случае, когда проверка на равенство вернула true.

// Задание
// Функция getSubscriptionPrice(type) получает строку с типом подписки пользователя (параметр type), проверяет её на совпадение с тремя возможными типами ежемесячной подписки и возвращает цену хранящуюся в переменной price.

// Если значение параметра type это строка:

// 'starter' - цена подписки 0 кредитов.
// 'professional' - цена подписки 20 кредитов.
// 'organization' - цена подписки 50 кредитов.
// Изначально в теле функции была инструкция if...else, которая выглядела вот так.

// if (type === 'starter') {
//   price = 0;
// } else if (type === 'professional') {
//   price = 20;
// } else if (type === 'organization') {
//   price = 50;
// }
// После рефакторинга инструкция if..else была заменена на switch. Дополни код инструкции switch, чтобы функция работала правильно.




// function getSubscriptionPrice(type) {
//   let price;
//   // Пиши код ниже этой строки

//  switch (type) { 
//     case 'starter' : 
//       price = 0; 
//       break;

//     case 'professional': 
//       price = 20; 
//       break;

//     case 'organization': 
//       price = 50; 
//       break;
//   }

//   // Пиши код выше этой строки
//   return price;
// }



//-------------------------------------------------------------------------------------------------

// Инструкция switch c блоком default
// Если ни одного совпадения значений не произошло, необходимо выполнить код по умолчанию, как в блоке else для инструкции if...else. Для этого после всех блоков case добавляется блок default.

// switch (значение) {
//   case значение:
//     инструкции;
//     break;

//   case значение:
//     инструкции;
//     break;

//   default:
//     инструкции;
// }
// Оператор break после блока default не нужен, так как это и так последнее что будет выполнено в switch и управление будет передано коду за ним.

// Задание
// Функция checkPassword(password) получает пароль в параметр password, проверяет его на совпадение с паролем администратора в переменной ADMIN_PASSWORD и возвращает сообщение о результате сравнения, хранящееся в переменной message.

// Если значение параметра password:

// равно null, значит пользователь отменил операцию и в message записывается строка 'Отменено пользователем!'.
// совпадает со значением ADMIN_PASSWORD, в переменную message присваивается строка 'Добро пожаловать!'.
// не удобвлетворяет ни одному из предыдущих условий, в переменную message записывается строка 'Доступ запрещен, неверный пароль!'.
// Проведи рефакторинг кода, заменив инструкцию if..else на switch, и не забудь о блоке default (аналог else).



// function checkPassword(password) {
//   const ADMIN_PASSWORD = 'jqueryismyjam';
//   let message;

//   switch (password) {
//   case null:
//   message = 'Отменено пользователем!';
//   break;
      
//   case ADMIN_PASSWORD:
//   message = 'Добро пожаловать!';
//   break;
      
//    default:
//    message = 'Доступ запрещен, неверный пароль!';}

//   return message;
// }







//-------------------------------------------------------------------------------------------------

// Задача: доставка товара
// Задание
// Функция getShippingCost(country) должна проверять возможность доставки товара в страну пользователя (параметр country) и возвращать сообщение о результате хранящееся в переменной message. Обязательно используй инструкцию switch.

// Формат возвращаемой строки Доставка в <страна> будет стоить <цена> кредитов, где вместо <страна> и <цена> необходимо подставить соотвествующие значения.

// Список стран и стоимость доставки:

// Китай - 100 кредитов
// Чили - 250 кредитов
// Австралия - 170 кредитов
// Ямайка - 120 кредитов
// Из списка видно, что доставка есть не везде. Если указанной страны нет в списке, то функция должна вернуть строку 'Извините, в вашу страну доставки нет'


// function getShippingCost(country) {
//   let message;
  
 
//   switch(country) {
//     case 'Китай':
//       message=`Доставка в ${country} будет стоить 100 кредитов`;
//       break;
      
//       case 'Чили':
//       message=`Доставка в ${country} будет стоить 250 кредитов`;
//       break;
      
//       case 'Австралия':
//       message=`Доставка в ${country} будет стоить 170 кредитов`;
//       break;
      
//       case 'Ямайка':
//       message=`Доставка в ${country} будет стоить 120 кредитов`;
//       break;
      
//     default:
//       message='Извините, в вашу страну доставки нет';
//   }
      
    
//   return message;
// }




//-------------------------------------------------------------------------------------------------


// Длина строки
// Для того чтобы узнать длину строки, то есть количество её символов, у всех строк есть встроенное свойство length, значение которого можно получить обратившить к нему через точку после имени переменной или строкового литерала.

// const productName = 'Ремонтный дроид';

// // Если в переменной хранится строка
// console.log(productName.length); // 15

// // Если строковый литерал
// console.log('Ремонтный дроид'.length); // 15
// Задание
// Функция getNameLength(name) принимает имя (параметр name) и возвращает строку, в которой указана его длина. Дополни шаблонную строку в переменной message длиной строки из параметра name.



// function getNameLength(name) {
//   const message = `Длина вашего имени ${name.length} символа(ов)`;

//   return message;
// }


//-------------------------------------------------------------------------------------------------
// Метод slice()
// Метод строк slice(startIndex, endIndex) используется для создания копии части или всей строки. Он делает копию элементов строки от startIndex и до, но не включая endIndex и возвращает новую строку.

// const productName = 'Ремонтный дроид';
// console.log(productName.slice(0, 4)); // 'Ремо'
// console.log(productName.slice(3, 9)); // 'онтный'
// console.log(productName.slice(0, productName.length)); // 'Ремонтный дроид'
// console.log(productName.slice(10, productName.length)); // 'дроид'
// Задание
// Функция getSubstring(string, length) принимает строку и возвращает подстроку от начала и до length символов. Она объявляет два параметра, значения которых будут задаваться во время её вызова:

// string - оригинальная строка
// length - количество символов с начала строки для подстроки
// Присвой переменной substring выражение создания подстроки длинной length символов (от начала) из строки string.



// function getSubstring(string, length) {
//   const substring = string.slice(0,[length]) ; // Дополни эту строку

//   return substring;
// }

//-------------------------------------------------------------------------------------------------

// Форматирование сообщения
// Задание
// Функция formatMessage(message, maxLength) принимает строку (параметр message) и форматирует её, если длина превышает значение в параметре maxLength.

// Дополни код функции так, что если длина строки:

// не превышает maxLength, функция возвращает её в исходном виде.
// больше maxLength, то функция обрезает строку до maxLength символов и добавляет в конец троеточие '...', после чего возвращает укороченную версию.


// function formatMessage(message, maxLength) {
//   let result;
// // Пиши код ниже этой строки
//   if (message.length <= maxLength) {
//   result = message;
//   } else {
//   result = message.slice(0, maxLength) + "...";
//   return result;
//   }

// // Пиши код выше этой строки
//   return result;
// }


//-------------------------------------------------------------------------------------------------

// Методы toLowerCase() и toUpperCase()
// Бывают ситуации когда все символы в строке необходимо преобразовать в один регистр, верхний или нижний. Например, при поиске по ключевому слову, когда пользователь вводит строку 'saMsUng', а сравнить её надо со строкой 'samsung' или 'SAMSUNG'.

// console.log('saMsUng' === 'samsung'); // false
// console.log('saMsUng' === 'SAMSUNG'); // false
// Чтобы не требовать абсолютно точный ввод можно сделать «нормализацию» введённой пользователем строки, то есть преобразовать все её символы в верхний или нижний регистр. Методы строки toLowerCase() и toUpperCase() вернут новую строку в соответствующем регистре, не изменяя оригинальную.

// const BRAND_NAME = 'SAMSUNG';
// const userInput = 'saMsUng';
// const normalizedToUpperCaseInput = userInput.toUpperCase();

// console.log(userInput); // 'saMsUng'
// console.log(userInput === BRAND_NAME); // false
// console.log(normalizedToUpperCaseInput); // 'SAMSUNG'
// console.log(normalizedToUpperCaseInput === BRAND_NAME); // true
// Задание
// Функция normalizeInput(input) принимает строку (параметр input) и возвращает такую же строку, но в нижнем регистре. Присвой переменной normalizedInput выражение создания строки в нижнем регистре из параметра input.


// function normalizeInput(input) {
//   const normalizedInput = input.toLowerCase(); // Дополни эту строку
//   return normalizedInput;
// }


//-------------------------------------------------------------------------------------------------
// Метод includes()
// Метод строк includes(substring) проверяет входит ли подстрока substring в строку, возвращает буль - true если входит и false в противном случае. Регистр символов в строке и подстроке имеет значение, так как например буква 'a' не равна букве 'А'.

// const productName = 'Ремонтный дроид';

// console.log(productName.includes('н')); // true
// console.log(productName.includes('Н')); // false
// console.log(productName.includes('дроид')); // true
// console.log(productName.includes('Дроид')); // false
// console.log(productName.includes('Ремонтный')); // true
// console.log(productName.includes('ремонтный')); // false
// Задание
// Функция checkName(fullname, name) принимает два параметра и возвращает буль true или false - результат проверки вхождения подстроки name в строку fullname.

// fullname - полное имя состоящее из двух слов (имени и фамилии) разделённых пробелом.
// name - имя для проверки вхождения в полное имя.
// Присвой переменной result выражение проверки вхождения имени (параметр name), в полное имя (параметр fullname). Пусть функция строго относится к регистру букв, то есть «Петя» и «петя» для неё разные имена.


// function checkForName(fullName, name) {
//  const result = fullName.includes(name) ; 
//   return result;
// }



//-------------------------------------------------------------------------------------------------
// Проверка спама
// Задание
// Функция checkForSpam(message) принимает строку (параметр message), проверяет её на содержание запрещенных слов spam и sale, и возвращает результат проверки. Слова в строке параметра message могут быть в произвольном регистре, например SPAM или sAlE.

// Если нашли запрещенное слово (spam или sale) то функция возвращает буль true.
// Если в строке нет запрещенных слов, функция возвращает буль false.






// function checkForSpam(message) {
//   let result;
//   const normalize = message.toLowerCase(); 
  
//   if (normalize.includes('spam')) {
//       result = true;
//       } 
//   else if (normalize.includes('sale')) {
//       result = true;
//       }
  
//   else {
//   result = false;
//   }
 
//   return result;
// }


//-------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------