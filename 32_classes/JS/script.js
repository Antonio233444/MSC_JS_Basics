let Users = {
    hasAccesToProfile: true,
    approved: true,
    sayHi : function() {
        return 'Привет';
    }
}

function User(name, email, password) {
    //конструктор
    this.name = name;
    this.email = email;
    this.password = password;

    this.__proto__ = Users;
}

const Fedya = new User ('Федя', 'fedya@ex.com', 'qwerty');

console.log(Fedya);
console.log(Fedya.sayHi());

function FUser(name, email, password) {
    //конструктор
    this.name = name;
    this.email = email;
    this.password = password;
    this.__proto__ = Users;
    this.sayHi = function() {
        return 'Привет! ' + this.name + ' Ты зарегистрирована';
  
}
}


const Alla = new FUser('Алла', 'asd@ex.com', '12345');
console.log(Alla);

console.log(Alla.sayHi());