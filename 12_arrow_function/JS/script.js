let myText = (element,text) => element.innerHTML = text;

myText(document.body, 'Привет');


let Names = (names, surname) => {
    return names + ' ' + surname;
}

alert(Names('Anton', 'Harlamov'));

//теперь нет нужды писать слово function,если используем стрелочную функцию;

let Name = (name,surname)  => {
    return name + ' ' + surname;
}

console.log(Name('Anton','harlamov'));