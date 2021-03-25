//Цикл for of,будет использоваться для обращения к элементам массива по очереди,таким способам их удобно перебирать;

const buttons = document.querySelectorAll('button');

for(button of buttons) {   // мы обращаемся к каждому элементу(каждой кнопке) этого массива из кнопок;
    button.style.backgroundColor = 'lightblue';
}



//Цикл for in,позволяет обращаться к элементам объекта и перебирать все его ключи;





let person = {
    name: 'Sasha',
    surname:'Harlamov',
    teacher: false,
    age: 30
}


for( key in person) {
    console.log(person[key]);
}



/*let arr = [1,3,4,5,6,7,8];

for(item of arr) {
    console.log(item);
}
*/


let arr2 = [
    [
        [1,2,3,4],
        [5,6,7,8]
    ],
    [
        [9,10,11],
        [12,13,14]
    ]
]

/*for(subArr of arr2) {
    console.log(subArr);// будут выведены два больших массива внутри;
}
*/

/*
for(subArr of arr2) {
    for(item of subArr) {
        console.log(item); // будут выведены все четыре  малых массива внутри;
    }
}
*/

/*for(subArr of arr2) {
    for(smallArr of subArr) {
        for(item of smallArr) {
            console.log(item);
        }
    }
}
*/


let newSchool = [
    [
      ['Lil Yachty', 'Playboi Carti', 'Lil Uzi Vert'],
      ['Sonny Digital', 'Metro Boomin', '12Hunna']
    ],
    [
      ['Yung Lean', 'Ecco2K', 'Bladee'],
      ['Whitearmor', 'PJ Beats', 'Yung Gud']
    ]
  ]


  for(subArr of newSchool) { // два больших массива 
      for(item of subArr) {   // четыре массива внутри двух больших
          for(items of item) { // элементы всех массивов
              console.log(items); // выводим все items в консоль
          }
      }
  }




  const cart = {
    orderID: 12345,
    shopperName: "Ваня Иванов",
    shopperEmail: "ivanov@example.com",
    contents: [
      {
        productID: 34,
        productName: "Супер товар",
        quantity: 1
      },
      {
        productID: 56,
        productName: "Чудо товар",
        quantity: 3
      }
    ],
    orderCompleted: true
  }

  console.log(cart.contents[1].productName);