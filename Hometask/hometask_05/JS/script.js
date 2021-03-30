


const APIkey = '40aa06b8277083f0f9e28e699379f669';

/*const city = 'Kiev';*/

const form = document.forms[0];

const city = form.elements.first.value;



const insert = document.querySelector('.total');



const url = 'http://api.openweathermap.org/data/2.5/weather?q='+city+'&appid='+APIkey;




let xhr = new XMLHttpRequest(); //отправка запросов на сервер;

xhr.open('GET',url, false); // настройка запросов на сервер;


xhr.send();//запрос отправлен;



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
























