'use strict';

function advancedFunction (param1) {
    if (typeof(param1) === 'string') {
        (param1.trim().length) > 30 ? console.log(param1.trim().slice(0,30) + '...') : console.log(param1.trim());
    } else {
        console.log("param is not a string");
    }
}
//advancedFunction(" Объявить функцию");
//advancedFunction(" Объявить функцию getServicePercentPrices.");
//advancedFunction(5);