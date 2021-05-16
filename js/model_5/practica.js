/* 1. Напиши класс User для создания пользователя со 
следующим свойствами:
a. username - имя, строка
b. age - возраст, число
c. numberOfPosts - кол-во постов, число
d. Класс ожидает 1 параметр - объект настроек с 
одноимёнными свойствами.
Добавь метод getInfo(), который, возвращает строку: 
Пользователю ${имя} ${возраст} лет и 
у него ${кол-во постов} публикаций. */

const User = function (userObj) {
  const { username, age, numberOfPosts } = userObj;
  this.username = username;
  this.age = age;
  this.numberOfPosts = numberOfPosts;

  // this.getInfo = function () {
  //   console.log(`Пользователю ${this.username} ${this.age} лет и
  //   у него ${this.numberOfPosts} публикаций.`);
  // };
};

// console.log(User.prototype);

User.prototype.getInfo = function () {
  console.log(`Пользователю ${this.username} ${this.age} лет и
    у него ${this.numberOfPosts} публикаций.`);
};

const user1 = new User({ username: "Игорь", age: 34, numberOfPosts: 10 });

// console.log(user1);

// user1.getInfo();
// -----------------

/* 2. Напиши класс Storage который создаёт объекты 
для управления складом товаров. 
При вызове будет получать один аргумент - начальный 
массив товаров, и записывать его в свойство items.
Добавь методы класса:
a. getItems() - возвращает массив товаров.
b. addItem(item) - получает новый товар и добавляет 
его к текущим.
c. removeItem(item) - получет товар и, если он есть, 
удаляет его из текущих. */

const Storage = function (itemsArr) {
  this.items = itemsArr;
};

Storage.prototype.getItem = function () {
  return this.items;
};

Storage.prototype.addItem = function (item) {
  return this.items.push(item);
};

Storage.prototype.removeItem = function (item) {
  const index = this.items.indexOf(item);

  if (index !== -1) {
    this.items.splice(index, 1);
  }

  return this.items;
};

const storage = new Storage(["Item1", "Item2", "Item3"]);

// console.log(storage.getItem());

// console.log(storage.addItem("Item4"));

// console.log(storage.getItem());

// console.log(storage.removeItem("Item2"));

// console.log(storage.getItem());

// -----------------

/* 3. Напиши класс Client который создаёт объект 
со свойствами login и email. 
Объяви приватные свойства #login и #email, 
доступ к которым сделай 
через геттер и сеттер login и email. */

class Client {
  #login;
  #email;

  constructor(login, email) {
    this.#email = email;
    this.#login = login;
  }

  // get getClientData() {
  //   return {
  //     login: this.#login,
  //     email: this.#email
  //   };
  // }

  set changeEmail(newEmail) {
    this.#email = newEmail;
  }
}

const client = new Client("nickname", "test@test.ru");

// console.log(client.getClientData);

client.changeEmail = "test1@test1.com";

// console.log(client.getClientData);

// console.log(client);

// -----------------

/* 4. Напиши класс Notes который управляет коллекцией 
заметок в свойстве items. 
Заметка это объект со свойствами text и priority. 
Добавь классу статическое свойство Priority, 
в котором будет храниться объект с приоритетами. 
Добавь методы addNote(note), removeNote(text) и 
updateNotePriority(text, newPriority). */

//TODO:updateNotePriority(text, newPriority) - дома

class Notes {
  constructor() {
    this.items = [];
  }

  static Priority() {
    return {
      HIGH: "high",
      LOW: "low"
    };
  }

  addNote(note) {
    return this.items.push(note);
  }

  removeNote(noteName) {
    const index = this.items.findIndex(item => item.text === noteName);

    if (index !== -1) {
      this.items.splice(index, 1);
    }
  }
}

const note1 = new Notes();

// note1.addNote({ text: "Note1", priority: Notes.Priority().LOW });
// note1.addNote({ text: "Note2", priority: Notes.Priority().HIGH });
// note1.addNote({ text: "Note3", priority: Notes.Priority().LOW });

// note1.removeNote("Note2");

// console.log(note1.items);

// -----------------

/*
  5. Создать класс Worker у которого есть 
  свойства name, surname, age, position, salary.
     У класса Worker есть метод getSalary.
     Создать класс TopLevelWorker у которого есть 
     свойство hierarchyLevel и который 
     наследует класс Worker, добавляя метод getHierarchyLevel
     Реализовать задачу с помощью ES5 прототипов и ES6 классов
*/

const HIERARCHY_LEVEL = {
  TOP: "top",
  BOTTOM: "bottom"
};

const workerObj = {
  name: "Антон",
  surname: "Ефимов",
  age: 34,
  position: "FE разработчик",
  salary: 3000
};

// ES5

const Worker = function (obj) {
  const { name, surname, age, position, salary } = obj;

  this.name = name;
  this.surname = surname;
  this.age = age;
  this.position = position;
  this.salary = salary;
};

Worker.prototype.getSalary = function () {
  return this.salary;
};

const TopLevelWorker = function (obj, hierarchyLevel) {
  Worker.call(this, obj);
  this.hierarchyLevel = hierarchyLevel;
};

TopLevelWorker.prototype = Object.create(Worker.prototype);
TopLevelWorker.prototype.constructor = TopLevelWorker;

// const topLevelWorker1 = new TopLevelWorker(workerObj, HIERARCHY_LEVEL.TOP);
// console.log(topLevelWorker1);
// console.log(topLevelWorker1.getSalary());

// ES6

class Worker2 {
  constructor(obj) {
    const { name, surname, age, position, salary } = obj;

    this.name = name;
    this.surname = surname;
    this.age = age;
    this.position = position;
    this.salary = salary;
  }

  getSalary() {
    console.log(this.salary);
  }
}

class TopLevelWorker2 extends Worker2 {
  constructor(obj, hierarchyLevel) {
    super(obj);
    this.hierarchyLevel = hierarchyLevel;
  }
}

const topLvlWorker = new TopLevelWorker2(workerObj, HIERARCHY_LEVEL.TOP);

console.log(topLvlWorker);
topLvlWorker.getSalary();