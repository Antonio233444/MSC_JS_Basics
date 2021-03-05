window.addEventListener('load', function(){

  const button = document.querySelector('.button');
  const ball = document.querySelector('.ball');
  const par = document.querySelector('.show p');
  button.addEventListener('click', ()=>{

    ball.style.animationPlayState = 'running';
  })
  window.onscroll = () => {
    if(window.scrollY >= 1000) {
      par.style.opacity = 1;
    }
    else {
      par.style.opacity = .5;
    }
  }
});



/*const button = document.querySelector('.button');
const text = document.querySelector('p');

button.addEventListener('click',function(){ //1 способ
  text.style.backgroundColor = 'green';
})


button.onclick = function() {     //2 способ
  text.style.backgroundColor = 'blue';
}
*/




