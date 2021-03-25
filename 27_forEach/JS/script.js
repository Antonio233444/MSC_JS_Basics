/*const button = document.querySelector('button');
const lorems = document.querySelectorAll('div');

button.onclick = function() {
    lorems.forEach(function(lorem){
        lorem.style.fontSize = '30px';
    })
}
*/

//forEach это метод,который применяет функцию один раз к указанному элементу;

let b = [1,2,3];

b.forEach(function(elem, index){
    console.log(elem);// выведет все  элементы  массива(1,2,3)
    console.log(index);// выведет все индексы элементов массива,то есть их номер(0,1,2)
    console.log('-')// разделяем элементы в консоли,для наглядности;
})


const arr = [1,2,3,4,5];
for(item of arr) {
    console.log(item);
}










 