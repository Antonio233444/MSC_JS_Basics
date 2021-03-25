/*const apiString = '[{"city": "Moscow", "temp": 10,"pressure": 250},{ "city": "Miami" ,"temp": 28,"pressure": 200},{  "city": "Beijin","temp": 15,"pressure": 210}]';

const DATA = JSON.parse(apiString);
console.log(DATA); // получили объект,с которым далее можем работать;
*/

const apiString = JSON.stringify(DATA);// сделать строкой
console.log(apiString);

//Итого

//Метод JSON.parse() превращает строку,содержащую JSON,в классический объект;

//Метод JSON.stringify() превращает объект JSON в строку;








 