const button = document.querySelector('.request');

const pop = document.querySelector('.popup');

const icon = document.querySelector('.closePopup');

const state = 'none';


button.addEventListener('click', function(){

    pop.style.display = 'flex';
});


icon.addEventListener('click', function(){

    pop.style.display = 'none';
})


const menu = document.querySelector('.menu');

const close = document.querySelector('.closeMenu');

const open = document.querySelector('.openMenu');



close.addEventListener('click',function(){
    menu.style.left = '-50vw';
})

open.addEventListener('click',function(){
    menu.style.left = '0';
})










