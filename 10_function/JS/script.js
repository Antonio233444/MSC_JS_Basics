
/*function SayHi() {
    return 'Привет,студент!';
}

document.body.innerHTML = (SayHi());

function sayName(name) {
    return 'Привет' + ' ' + name;
}

alert(sayName('Антон'));
*/








/*let totalCash;
let ringPrice;
let phonePrice;



function haveEnough(totalCash, ringPrice, phonePrice) {
    if(totalCash >= ringPrice + phonePrice) {
        return 'Денег хватит';
    }

    else {
        return 'Заходи в другой раз';
    }
}

alert(haveEnough(1000,900,200));
*/



/*


function haveEnough(totalCash, watchesPrice, earringsPrice, watchesCount, earringsCount) {

    if(totalCash >= watchesCount * watchesPrice + earringsCount * earringsPrice) {
        return 'Enough $$$';
    }
    else {
        return 'Not Enough $$$';
    }
}

alert(haveEnough(1000,200,300,1,2));

*/




let haveEnough = (totalCash, watchesPrice, earringsPrice, watchesCount, earringsCount) => {

    if(totalCash >= watchesCount * watchesPrice + earringsCount * earringsPrice) {
        return 'Enough $$$';
    }
    else {
        return 'Not Enough $$$';
    }
}

alert(haveEnough(1000,300,400,1,2));

