
const Colored = document.querySelector('.colored');
console.log(Colored);

console.log(Colored.style);

let quest = prompt('Какой цвет блока ты хочешь?');


//Colored.style.backgroundColor = "blue";//1 вариант
Colored.style['background-color'] = quest;// 2 вариант
