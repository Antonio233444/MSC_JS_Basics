let Animal = {
    canEat: true,
    hasParents: true
}


let Cow = {
    givesMilk: true,
    __proto__: Animal // то есть в данном случае,Animal - это прототип объекта Cow;
}


console.log(Cow.givesMilk); // мы можем обращаться к свойствам и методам объекта Cow,то есть прототипу Animal;
console.log(Cow.canEat); // мы можем обращаться к свойствам и методам объекта Cow,то есть прототипу Animal;

for(key in Cow) {
    console.log(key);// получим все ключи,в том числе и ключи прототипа;
}

// Пример

let Man = {
    age : 30,
    city: 'Moscow',
    name: 'Anton',
    hasParents: true
}


let Anton = {
    isMan: true,
    __proto__: Man
}

for(key in Man){
    console.log(key);
}