//объект-комплексный типа данных,который позволит хранить в себе другие данные;

let person = {
   name: 'Саша',
   surname: 'Петров',
   age: 30,
   teacher: true,
   sayHello: function() { // создание своего метода;
      return 'Hello ' + this.name// тут мы можем использовать контекст;
   }
}

console.log(person.age);
console.log(person.sayHello());

person.city = 'Moscow';//добавление данных в объект(ключ-значение);

console.log(person);

person.age = 29;

console.log(person['surname']);