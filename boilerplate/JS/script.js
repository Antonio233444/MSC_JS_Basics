
let totalCash = +prompt('Введите количество денег');
let watchesCount = +prompt('Сколько часов куплено?');
let earringsCount = +prompt('Сколько сережек в уши куплено?');

let watchesSum = +prompt('Стоимость часов') * watchesCount;
let earringsSum = +prompt('Стоимость серёжек') * earringsCount;
if ( watchesSum + earringsSum <= totalCash) {
    document.write('true');
}
    else {
        document.write('false');
    }