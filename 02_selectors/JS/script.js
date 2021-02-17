const byTag = document.getElementsByTagName('div');//выбор элемента по тегу.Создали переменную и сохранили в неё;
console.log(byTag);//вывели в консоль;
const byClass = document.getElementsByClassName('myClass');//выбор элемента по классу;
console.log(byClass);
const byId = document.getElementById('myId');
console.log(byId);

//Новый способ выбора элементов в JS,появивишйся в последнем стандарте языка

const allBySelector = document.querySelectorAll('.coolClass.mine')//можем вводить любой селектор;
console.log(allBySelector);

const firstBySelector = document.querySelector('.coolClass.mine');//возвращает HTML-код.Находит самый первый элемент с выбранным классом и выводит его;
console.log(firstBySelector);

const quest = prompt('Что хотите написать на странице?');

byId.innerHTML = quest;


/*console.log(document.body.innerHTML);// свойство innerHTML позволяет вывести содержимое HTML документа;
document.body.innerHTML = 'Новый BODY!';// так же можем заменить содержимое;*/