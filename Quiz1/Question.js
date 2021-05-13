class Question{
    constructor(){
        this.title = createElement('h1')
        this.input = createInput("Answer");
        this.button = createButton('Submit');
        this.question = createElement('h2');
        this.clue0 = createElement('h4');
        this.clue1 = createElement('h2');
        this.clue2 = createElement('h2');
    }

    hide(){
        this.title.hide();
        this.input.hide();
        this.button.hide();
        this.clue0.hide();
        this.clue1.hide();
        this.clue2.hide();
    }

    display(){
        this.title.html("The Zodiacs 1");
        this.title.position(270, 0);
        this.title.style('color', 'white');
        this.question.html("");
        this.question.position(30, 200);
        this.question.style('color', 'orange');
        this.input.position(150, 350);
        this.input.style('color','red')
        this.button.position(350, 350);
        this.button.style('background','yellow')
        this.clue0.position(750,260);
        this.clue0.style('color','white');
        this.clue1.position(820,330);
        this.clue1.style('color','white');
        this.clue2.position(820,430);
        this.clue2.style('color','white');
    }
}