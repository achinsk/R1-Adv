'use strict';

let screenPrice;

const isNumber = function (num) {    
    return !isNaN(parseFloat(num)) && isFinite(num);
}
const asking = function () {
    do {
        screenPrice = prompt("Сколько будет стоить данная работа?");
    } while (!isNumber(screenPrice));
    // способ сохранять в переменную ответ пользователя после проверки на число именно как число при любом вводе
    screenPrice = parseFloat(screenPrice);
}

asking();
