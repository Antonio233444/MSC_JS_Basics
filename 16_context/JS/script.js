console.log(this);//this указывает на контекст;в данном случае контекстом будет окно,window;

window.onscroll = function() {
    console.log(this);
}


/*const button = document.querySelector('button');

button.onclick = function() {
    this.innerHTML = 'кнопочка';// работа в контексте этой кнопки,добавление ей другого текста при нажатии;
}
*/


/*const button = document.querySelector('button');

button.onclick = () => {
    console.log(this);// использовать стрелочные функции для работы с контекстом нельзя,это не будет работать;
}
*/

const bat = document.querySelector('.butt');

bat.onclick = function() {
    bat.innerHTML = 'нажато';
}