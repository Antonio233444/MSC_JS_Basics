const form = document.forms[0];// elements используется для форм;


const insert = document.querySelector('.total');

form.onsubmit = function(e) {
    e.preventDefault();
    insert.innerHTML = Math.sin(form.elements.quantility.value);
}












