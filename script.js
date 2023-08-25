'use strict';

const week = ['понедельник','вторник','среда','четверг','пятница','суббота','воскресенье'];
const weekend = ['суббота','воскресенье'];

// Вывести на экран все дни недели
console.log(week);

// Каждый из них с новой строчки
week.forEach((item) => console.log(item));

// Выходные дни - курсивом
week.forEach((item) => weekend.includes(item) ? console.log(`%c${item}`, 'font-style: italic;') : console.log(item));

// Текущий день - жирным шрифтом(использовать объект даты)
let today = new Date().toLocaleDateString('ru-RU',{weekday: 'long'}, {timeZone: "Europe/Moscow"});
week.forEach((item) => (item === today) ? console.log(`%c${item}`, 'font-weight: bold;') : console.log(item));
