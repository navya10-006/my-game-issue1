class Clues{
    constructor(){
        this.clueButton = createButton("Give me a Hint");
        this.gameState = 0;
        this.score = 0;
        this.clue0 = 0;
        this.clue1 = 0;
        this.clue2 = 0;
        this.clue3 = 0;
        this.clue4 = 0;
        this.constellation = null;
        this.question = new Question();
        this.question.display();
    }
    display(){
        this.clueButton.position(450,350);
        this.clueButton.style('background','lightgreen');

        if(this.gameState === 0){
            this.question.question.html("Question:- What is commonly regarded as patron of sailors?");
            this.clueButton.mousePressed(()=>{
                var answer = this.question.input.value();
                var actualAnswer = "GEMINI";
                if(actualAnswer === answer.toUpperCase() && this.clue0 != 2){
                    this.score += 1;
                    this.gameState = 1;
                }
                else if(this.clue0 === 0){
                    var options ={
                        isStatic: true
                    }
                    this.constellation = Bodies.rectangle(950,200,1,1,options);
                    this.width = 150;
                    this.height = 150;
                    var geminiL = loadImage("Images/gemini complete.png");
                    translate(this.constellation.position.x, this.constellation.position.y);
                    imageMode(CENTER);
                    image(geminiL,0,0,this.width,this.height);
                    World.add(world,this.constellation);
                    this.question.clue0.html("The answer constellation can be seen in the night sky in this form.");
                    this.clue0 = 1;
                }
                else if(this.clue0 === 1){
                    this.question.clue1.html("G _ M _ _ I");
                    this.clue0 = 2;
                }
                else if(this.clue0 === 2){
                    this.question.clue2.html("Answer: GEMINI");
                }
                if(actualAnswer === answer.toUpperCase() && this.clue0 === 2){
                    this.gameState = 1;
                    this.score = this.score;
                    this.constellation.destroy();
                    this.question.clue0.html("");
                    this.question.clue1.html("");
                    this.question.clue2.html("");
                }
            })
        }

        if(this.gameState === 1){
            this.uestion.question.html("Question:- In Greek mythology, this creature was sent to divert <br> Hercules’ attention during his battle with the monstrous Hydra. ");
            this.clueButton.mousePressed(()=>{
                var answer = this.question.input.value();
                var actualAnswer = "CANCER";
                if(actualAnswer === answer.toUpperCase() && this.clue1 != 2){
                    this.score += 1;
                    this.gameState = 2;
                }
                else if(this.clue1 === 0){
                    this.constellation = createSprite(950,200,1,1);
                    var cancerL = loadImage("Images/cancer complete.png");
                    this.constellation.addImage("cancer",cancerL);
                    this.constellation.scale = 0.7;
                    this.question.clue0.html("The answer constellation can be seen in the night sky in this form.");
                    this.clue1 = 1;
                }
                else if(this.clue1 === 1){
                    this.question.clue1.html("_ A _ N C _ _");
                    this.clue1 = 2;
                }
                else if(this.clue1 === 2){
                    this.question.clue2.html("Answer: CANCER");
                }
                if(actualAnswer === answer.toUpperCase() && this.clue1 === 2){
                    this.gameState = 2;
                    this.score = this.score;
                    this.constellation.destroy();
                    this.question.clue0.html("");
                    this.question.clue1.html("");
                    this.question.clue2.html("");
                }
            })
        }
        if(this.gameState === 2){
            this.question.question.html("Question:- This group of stars is located nearby other <br> water-related constellations and is the namesake of a southern <br> tropic. ");
            this.clueButton.mousePressed(()=>{
                var answer = this.question.input.value();
                var actualAnswer = "CAPRICORNUS";
                if(actualAnswer === answer.toUpperCase() && this.clue2 != 2){
                    this.score += 1;
                    this.gameState = 3;
                }
                else if(this.clue2 === 0){
                    this.constellation = createSprite(950,200,1,1);
                    var capricornusL = loadImage("Images/capricornus complete.png");
                    this.constellation.addImage("capricornus",capricornusL);
                    this.constellation.scale = 0.3;
                    this.question.clue0.html("The answer constellation can be seen in the night sky in this form.");
                    this.clue2 = 1;
                }
                else if(this.clue2 === 1){
                    this.question.clue1.html("C _ _ _ I C _ _ _ U S");
                    this.clue2 = 2;
                }
                else if(this.clue2 === 2){
                    this.question.clue2.html("Answer: CAPRICORNUS");
                }
                if(actualAnswer === answer.toUpperCase() && this.clue2 === 2){
                    this.gameState = 3;
                    this.score = this.score;
                    this.constellation.destroy();
                    this.question.clue0.html("");
                    this.question.clue1.html("");
                    this.question.clue2.html("");
                }
            })
        }
        if(this.gameState === 3){
            this.question.question.html("Question:- This constellation contains two of the largest star <br> clusters visible from Earth: the Hyades and the Pleiades. <br> It is a symbol of strength and fertility.");
            this.clueButton.mousePressed(()=>{
                var answer = this.question.input.value();
                var actualAnswer = "TAURUS";
                if(actualAnswer === answer.toUpperCase() && this.clue3 != 2){
                    this.score += 1;
                    this.gameState = 4;
                }
                else if(this.clue3 === 0){
                    this.constellation = createSprite(950,200,1,1);
                    var taurusL = loadImage("Images/taurus complete.png");
                    this.constellation.addImage("taurus",taurusL);
                    this.constellation.scale = 0.9;
                    this.question.clue0.html("The answer constellation can be seen in the night sky in this form.");
                    this.clue3 = 1;
                }
                else if(this.clue3 === 1){
                    this.question.clue1.html("T _ _ R _ S");
                    this.clue3 = 2;
                }
                else if(this.clue3 === 2){
                    this.question.clue2.html("Answer: TAURUS");
                }
                if(actualAnswer === answer.toUpperCase() && this.clue3 === 2){
                    this.gameState = 3;
                    this.score = this.score;
                    this.constellation.destroy();
                    this.question.clue0.html("");
                    this.question.clue1.html("");
                    this.question.clue2.html("");
                }
            })
        }
        if(this.gameState === 4){
            this.question.question.html("Question:- Throughout history, different cultures have seen <br> various figures contained within this distinctive group of stars, <br> including a winged archer, a centaur, and a tea pot.");
            this.clueButton.mousePressed(()=>{
                var answer = this.question.input.value();
                var actualAnswer = "SAGITTARIUS";
                if(actualAnswer === answer.toUpperCase() && this.clue4 != 2){
                    this.score += 1;
                    this.gameState = 5;
                }
                else if(this.clue4 === 0){
                    this.constellation = createSprite(950,200,1,1);
                    var sagittariusL = loadImage("Images/sagittarius complete.png");
                    this.constellation.addImage("sagittarius",sagittariusL);
                    this.constellation.scale = 0.9;
                    this.question.clue0.html("The answer constellation can be seen in the night sky in this form.");
                    this.clue4 = 1;
                }
                else if(this.clue4 === 1){
                    this.question.clue1.html("S _ G _ _ T _ _ _ U S");
                    this.clue4 = 2;
                }
                else if(this.clue4 === 2){
                    this.question.clue2.html("Answer: SAGITTARIUS");
                }
                if(actualAnswer === answer.toUpperCase() && this.clue4 === 2){
                    this.gameState = 3;
                    this.score = this.score;
                    this.constellation.destroy();
                    this.question.clue0.html("");
                    this.question.clue1.html("");
                    this.question.clue2.html("");
                }
            })
        }
        
    }
}