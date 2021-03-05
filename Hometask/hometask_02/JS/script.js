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






