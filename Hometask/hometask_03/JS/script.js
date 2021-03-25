const form = document.forms[0];// elements используется для форм;


const insert = document.querySelector('.total');

form.onsubmit = function(e) {
    e.preventDefault();
    insert.innerHTML = Math.sin(3.14/180*(form.elements.quantility.value));
}












