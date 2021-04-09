
//Объявление переменных


/*
const APIkey = '40aa06b8277083f0f9e28e699379f669';


const form = document.forms[0];



const city = form.elements.first.value;


const insert = document.querySelector('.total');


const button = form.elements.submit;




const url = 'http://api.openweathermap.org/data/2.5/weather?q='+city+'&appid='+APIkey;




let xhr = new XMLHttpRequest();





//Написание функции


button.addEventListener('onsubmit', function() {


  form.onsubmit = function(e){
    e.preventDefault();
    if(xhr.status !=200) {
      console.log(xhr.status +' '+ xhr.statusText);
    }
    else{
      let DATA = JSON.parse(xhr.responseText);
      insert.innerHTML = DATA.main.temp - 273;
    }

  
  }

  xhr.open('GET',url, false); // настройка запросов на сервер;


  xhr.send();//запрос отправлен;
  
})

*/







const APIkey = '40aa06b8277083f0f9e28e699379f669';


const form = document.forms[0];

const button = form.elements.submit;

button.addEventListener('onsubmit',function(){
  
  const city = form.elements.first.value;
  const insert = document.querySelector('.total');


  const url = 'http://api.openweathermap.org/data/2.5/weather?q='+city+'&appid='+APIkey;


  let xhr = new XMLHttpRequest();

  xhr.open('GET',url, false); 


  xhr.send();

  if(xhr.status !=200) {
    console.log(xhr.status +' '+ xhr.statusText);
  }
  else{
    let DATA = JSON.parse(xhr.responseText);
    insert.innerHTML = DATA.main.temp - 273;
  }

})




























