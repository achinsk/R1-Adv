'use strict';

function mainGame() {

    let gameAgain;
    
    function getRandomInt(max) {
        return (1 + Math.floor(Math.random() * max));
    }    

    function start(x) {
        console.log(x); // to know what is the number
        let a;
        let promptMessage = "Угадай число от 1 до 100";
        let count = 10;
        
        const isNumber = function (num) {    
            return !isNaN(parseFloat(num)) && isFinite(num);
        }

        function engine() {
            a = prompt(promptMessage);

            if (a == null) {
                alert("Игра окончена");
                gameAgain = false;
            } else if (!isNumber(a)) {
                promptMessage = "Введи число!";
                engine();
            } else if (x !== parseFloat(a) && count == 1) {
                if (confirm("Попытки закончились, хотите сыграть еще?")) {
                    gameAgain = true;
                } else {
                    gameAgain = false;
                }
            } else if (x !== parseFloat(a)) {
                count -= 1;
                promptMessage = (x > parseFloat(a)) ? 
                `Загаданное число больше, осталось попыток ${count}, предлагаю ввести новый вариант` : 
                `Загаданное число меньше, осталось попыток ${count}, предлагаю ввести новый вариант`;
                engine();
            } else {
                if (confirm("Поздравляю, Вы угадали!!! Хотели бы сыграть еще?")) {
                    gameAgain = true;
                } else {
                    gameAgain = false;
                }
            }
        }
        engine();
    }

    do {
        start(getRandomInt(100));
    } while (gameAgain);    
}

mainGame();