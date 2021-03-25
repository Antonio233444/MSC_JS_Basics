const APIKEY = '40aa06b8277083f0f9e28e699379f669';

const city = 'Moscow';

const url = 'http://api.openweathermap.org/data/2.5/weather?q='+city+'&appid='+APIKEY;

let xhr = new XMLHttpRequest();

xhr.open('GET', url, false);

xhr.send();


if(xhr.status != 200) {
    console.log(xhr.status +' '+ xhr.statusText);
}
else{
     let DATA = JSON.parse(xhr.responseText);
     console.log(DATA);
     document.write(DATA.main.temp - 273);
}

