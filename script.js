'use strict';
 
let today;

const outputForB = function () {
    // it is already returned me with proper 0. But if not - solution is commented below with removing 0 and adding it back  
    return ((today.toLocaleString('ru-RU',{timeZone: "Europe/Moscow"})).replace(", ", " - "));
              
    // let myDate1 = today.toLocaleDateString('ru-RU',{timeZone: "Europe/Moscow"});
    // myDate1.split(".")
    //         .map(Number)
    //         .map((x) => (x < 10) ? x = "0" + x.toString() : x.toString())
    //         .join(".");
    
    // let myDate2 = today.toLocaleTimeString('ru-RU',{timeZone: "Europe/Moscow"})
    // myDate2.split(":")
    //         .map(Number)
    //         .map((x) => (x < 10) ? x = "0" + x.toString() : x.toString())
    //         .join(":");

    // return (`${myDate1} - ${myDate2}`);
}

const outputForA = function () {
    today = new Date();
    const monthArray = ['января','февраля','марта','апреля','мая','июня','июля','августа','сентября','октября','ноября','декабря'];
    let part1 = 'Сегодня';
    let part2 = (today.toLocaleDateString('ru-RU',{weekday: 'long'}, {timeZone: "Europe/Moscow"})).charAt(0).toUpperCase() + 
                (today.toLocaleDateString('ru-RU',{weekday: 'long'}, {timeZone: "Europe/Moscow"})).slice(1);
    let part3 = today.toLocaleString('ru-RU',{day: 'numeric'},{timeZone: "Europe/Moscow"});
    let part4 = monthArray[(today.toLocaleString('ru-RU',{month: 'numeric'},{timeZone: "Europe/Moscow"}))];
    let part5 = today.toLocaleString('ru-RU',{year: 'numeric'},{timeZone: "Europe/Moscow"});
    let part6 = 'года,';
    let part7 = parseInt(today.toLocaleTimeString('ru-RU',{hour: 'numeric', timeZone: "Europe/Moscow"}));
    let part8 = '';
    let part9 = (today.toLocaleTimeString('ru-RU',{minute: 'numeric', timeZone: "Europe/Moscow"}));
    let part9_tmp = part9.slice(-1);
    let part10 = '';
    let part11 = (today.toLocaleTimeString('ru-RU',{second: 'numeric', timeZone: "Europe/Moscow"}));
    let part11_tmp = part11.slice(-1);
    let part12 = '';

    if (part7 === 1 || part7 === 21) {
        part8 = 'час';  
    } else if (part7 === 2 || part7 === 3 || part7 === 4 || part7 === 24) {
        part8 = 'часа';
    } else {
        part8 = 'часов';
    }

    if (parseInt(part9) >=11 && parseInt(part9) <= 19) {
        part10 = 'минут';
    } else if (part9_tmp === '1') {
        part10 = 'минута';
    } else if (part9_tmp === '2' || part9_tmp === '3' || part9_tmp === '4') {
        part10 = 'минуты';
    } else {
        part10 = 'минут';
    }

    if (parseInt(part11) >=11 && parseInt(part11) <= 19) {
        part12 = 'секунд';
    } else if (part11_tmp === '1') {
        part12 = 'секунда';
    } else if (part11_tmp === '2' || part11_tmp === '3' || part11_tmp === '4') {
        part12 = 'секунды';
    } else {
        part12 = 'секунд';
    }

    return (`${part1} ${part2}, ${part3} ${part4} ${part5} ${part6} ${part7} ${part8} ${part9} ${part10} ${part11} ${part12}`);
}

const printTime = function () {
    today = new Date();
    console.log(outputForA());
    console.log(outputForB());
}

setInterval(printTime, 1000);