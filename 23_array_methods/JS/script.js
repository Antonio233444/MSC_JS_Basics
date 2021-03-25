// Добавление и удаление элементов массива(но не любых)

/*let myArr = [1,2,3];


myArr.push(4,5,6,7,8);// метод push() добавляет элементы в конец массива и возвращает его длину;
console.log(myArr);

myArr.pop();// метод pop() удаляет последний элемент из массива и возвращает его длину;
console.log(myArr);

myArr.unshift(-1,0);// метод unshift() добавляет элементы в начало массива;
console.log(myArr);

myArr.shift();// метод shift() удаляет первый элемент из массива и возвращает его длину;
console.log(myArr);
*/

//Удаление и замена ЛЮБЫХ элементов в массиве;

let myArray = [1,2,3,4,5];

delete myArray[2];//metod delete.Элемент не будет вырезан из массива и не будет осуществлён сдвиг,вместо элемента будет стоять empty;
console.log(myArray);
console.log(myArray[2]);// вернётся undefined,так как это значение мы удалили ранее;
myArray.splice(1,2);
console.log(myArray);// вернётся [1,4,5];
myArray.splice(1,1,'Здесь должно быть число четыре');//тут мы добавили строку.То есть начали с первого элемента,удалили его же и вместо него указали строку).Вместо вырезанных элемнтов можем добавить любое количество других элементов;
console.log(myArray);


/*let k = [33,44,55,66,77,88];
k.splice(2,3);//первое число-откуда начинаем,второе-сколько удаляем(причем элемент,с которого начали,тоже будет удалён);
//в данном случае мы начали с числа 55(у него второй индекс,так как у 33- индекс ноль),и удаляем три элемента(55,66,77);
console.log(k);

let arr = [5,6,7,8,9,10];// начали с элемента 6,удалили три элемента(6,7,8);
arr.splice(1,3);
console.log(arr);
*/


//вырезание элементов массива и их возврат,метод slice()

let arr = [1,2,3,4,5,6,7];

console.log(arr.slice(1,3));//метод slice возвращает копию вырезанных элементов массива(иными словами-новый массив).Первым аргументом мы указываем начальную точку,а вторым-конечную,при этом конечная точка включаться не будет;

let a = arr.slice(1,3);//так же вырезанные элементы массива можно сохранить в новую переменную и работать далее с ней;
console.log(a);
// так же с помощью этого метода можно вернуть неизмененную копию массива,не передавая ничего в аргументе;



//разворот массива,метод reverse;

let arr2 = [1,2,3,4,5,6,7];
let arr3 = arr2.reverse();// создали новый массив arr3,развернув массив arr2 с помощью метода reverse();
console.log(arr3);


//склеивание массивов,метод concat();

let b = [1,2,3];
let c = [4,5,6];
console.log(b.concat(c));//будет выведен новый массив,состоящий из двух сложенных массивов поменьше;

//поиск элементов в массиве,метод indexOf.Данный метод будет выдавать индекс любого элемента массива,а так же позволяет проверить наличие элемента в массиве();

let array = [1,4,5,7,8];
console.log(array.indexOf(8));//у числа 8 в массиве индекс 4;
console.log(array.indexOf(11));// данного элемента в массиве нет,поэтому выведется -1,это отличная проверка;


//метод sort(),работает ТОЛЬКО со строками.Сортирует и выводит в алфавитном порядке;

let stringArray = ['b','d','f','c','a','e'];// буквы идут в перемешку;
console.log(stringArray.sort());//в консоли метод sort() расставит(отсортирует) буквы в алфавитном порядке;



//сортировка для чисел,function compare();

/*function compare(a,b) {
return(a >b) ? 1 : -1;    // если число a больше числа b,вернуть 1.В противном случае вернуть -1;(запись с помощью тернарного оператора);
}
*/

function compare(a,b) {
    if(a > b) {
        return 1;
    }
    else {
        return -1;
    }
}

console.log(compare(2,5));

let numArray =[2,3,1,5,4,6];

console.log(numArray.sort(compare));// теперь мы можем с помощью sort отсортировать и числа;


let v = [1,2,3,4,5,6,7];// вернёт массив без вырезанных элементов;[1,5,6,7]
v.splice(1,3);
console.log(v);

let arr4 = [4,5,6,7,8,9,10];
console.log(arr4.slice(1,4));//вернётся вырезанный массив; [5,6,7]










