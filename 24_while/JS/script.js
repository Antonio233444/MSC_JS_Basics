const items = document.getElementsByTagName('li');
console.log(items);


 let counter = 0;
while(counter < items.length) { // у нас есть список из нескольких элементов списка li,представленных в виде массива;
    items[counter].innerHTML = counter + 1;
    counter++;
}










