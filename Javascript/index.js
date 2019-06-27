const section = document.querySelectorAll(".bottom");
console.log(section);
TweenMax.from(section, 200, {x: 1200});

class dropDown {
    constructor(element) {
        this.element = element;

        this.button = this.element.querySelector(REPLACEwithBUTTON);

        this.content = document.querySelector(REPLACEwithCONTENT);

        this.button.addEventListener('click', () => {
            this.toggle();
          })
    }
    
    toggle(){
        this.content.classList.toggle(DROPclassHERE);
    }
}

let dropdown = document.querySelectorAll().forEach( dropdown => new dropDown(dropdown));