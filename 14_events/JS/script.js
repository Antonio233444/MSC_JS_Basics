const button = document.querySelector('button');//выбрали первый нужный элемент,кнопку,на которую будем нажимать
const par = document.querySelector('p');// выбрали второй нужный элемент,параграф,цвет которого будет меняться
let state = 'none';


button.addEventListener('click', function() {    // добавили для кнопки слушатель событий и в анонимной функции написали,что будет происхожить по нажатию на кнопку;
    if(state =='none') {
      par.style.display = 'block';
      state = 'block';
    }
    else {
        par.style.display = 'none';
        state = 'none';
    }

})