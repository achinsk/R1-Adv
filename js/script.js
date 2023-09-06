'use strict';

const DomElement = function (selector, height, width, bg, fontSize) {
    this.selector = selector;
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;
    this.draw = function() {
        let identificator = (this.selector).slice(1);

        if (this.selector.charAt(0) === '.') {
            let div = document.createElement('div');
            div.classList.add(identificator);
            //div.setAttribute("id", identificator);
            div.style.cssText = `position: absolute; width: ${this.width}px;height: ${this.height}px;background-color: ${this.bg};font-size: ${this.fontSize}px;`;
            // div.innerText = 'Lesson15 div';
            document.body.appendChild(div);

        } else if (this.selector.charAt(0) === '#') {
            let p = document.createElement('p');
            p.setAttribute("id", identificator);
            p.style.cssText = `width: ${this.width}px;height: ${this.height}px;background-color: ${this.bg};font-size: ${this.fontSize}px;`;
            p.innerText = 'Lesson15 p'
            document.body.appendChild(p);
        }
    }
} 

const item = new DomElement('.block', 100, 100, 'blue', 10);

window.addEventListener('DOMContentLoaded', (event) => {
    item.draw();
  });

window.addEventListener("keydown", (event) => {
    let element = document.querySelector('.block');
    element.style.top === '' && (element.style.top = 0);
    element.style.left === '' && (element.style.left = 0);

    switch (event.key) {
        case "ArrowDown":
          element.style.top = (parseInt(element.style.top) + 10) +'px';
          break;
        case "ArrowUp":
            element.style.top = (parseInt(element.style.top)) - 10 + 'px';
            break;
        case "ArrowLeft":
            element.style.left = (parseInt(element.style.left) - 10) +'px';
            break;
        case "ArrowRight":
            element.style.left = (parseInt(element.style.left) + 10) +'px';
            break;
      }
});
