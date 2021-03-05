

const image = document.querySelector('img');//находим элемент;
console.log(image.hasAttribute('alt'));//уточняем,есть ли у этого элемента атрибут alt;
image.removeAttribute('alt');//удаляем атрибут;
console.log(image.hasAttribute('alt'));//снова проверяем наличие атрибута,в консоли будет уже false;

console.log(image.getAttribute('src'));// узнаём и выводим содержимое атрибута;
image.setAttribute('src', 'img/google.jpg');//меняем содержимое атрибута src;

const string = document.querySelector('input')
console.log(string.hasAttribute('placeholder'));
string.removeAttribute('placeholder');
console.log(string.hasAttribute('placeholder'));
console.log(string.getAttribute('name'));
string.setAttribute('placeholder','строчка' )