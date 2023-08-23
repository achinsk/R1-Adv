// Переменная lang может принимать 2 значения: 'ru' 'en'.
const lang = prompt ("Переменная lang");
const namePerson = prompt ("переменная namePerson");

const languageArray = {'ru': 'понедельник,вторник,среда,четверг,пятница,суббота,воскресенье', 
                       'en': 'Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday'};


if (lang == 'ru') {
    console.log('понедельник,вторник,среда,четверг,пятница,суббота,воскресенье');
} else {
    console.log('Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday');
}

switch(lang) {
    case 'ru':
        console.log('понедельник,вторник,среда,четверг,пятница,суббота,воскресенье');
        break;
    case 'en':
        console.log('Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday');
        break;
}

console.log(languageArray[lang]);


if (namePerson == 'Артем') {
    console.log('директор');
} else if (namePerson == 'Александр') {
    console.log('преподаватель');
} else {
    console.log('студент')
}

// Решить задачу с помощью нескольких тернарных операторов, без использования if или switch
console.log (namePerson == 'Артем' ? 'директор' : (namePerson == 'Александр') ? 'преподаватель' : 'студент');