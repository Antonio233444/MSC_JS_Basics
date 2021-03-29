class User {
    constructor(name, email,password) {
        this.name = name;
        this.email = email;
        this.password = password;
    }

    sayHi() {
        return 'Hello' + this.name;
    }
}



class Female extends User {   // теперь всё,что было  в первом классе,будет наследовано,с помощью ключеового слова extends;
    sayHi() {
        return 'Привет ' + this.name + '! ты зарегистрирована';
    }
}

const Man = new User('Антон', '123@ya.ru', 'qwerty');

console.log(Man.sayHi());


const Anya = new Female('Аня', '456@ya.ru', '12345');

console.log(Anya.sayHi());