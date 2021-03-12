/*function moduleSquare(num) {
   return Math.abs(num)/2;
}   

console.log(moduleSquare(-3));
console.log(moduleSquare(3));

console.log(Math.floor(2.456));
console.log(Math.round(2.789));

console.log(Math.random());
console.log(Math.random()* (10 - 5) + 5 );//будем получать случайное число в этом промежутке(не целое);
console.log(Math.round((Math.random()* (10 - 5) + 5 )));//а теперь любое число в промежутке,но уже целое;

*/

function randomNumber(num) {
     return Math.abs(num**Math.round(Math.random()* (9 - 1) + 1));
}

console.log(randomNumber(3));



