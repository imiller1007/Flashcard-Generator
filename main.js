var BasicCard = require("./BasicCard.js");
var ClozeCard = require("./ClozeCard.js");
var inquirer = require("inquirer");
numberCorrect = 0;
questionNum= 0;
//Basic Cards
waterBasic = new BasicCard("What is the chemical composition of water?", "H2O");
oxygenBasic = new BasicCard("What is the chemical composition of oxygen?", "O2");
glucoseBasic = new BasicCard("What is the chemical composition of glucose?", "C6H12O6");
alcoholBasic = new BasicCard("What is the chemical composition of alcohol?", "C2H6O");
diamondBasic = new BasicCard("What is the chemical composition of a diamond?", "C");
bleachBasic = new BasicCard("What is the chemical composition of bleach?", "NaCIO");
saltBasic = new BasicCard("What is the chemical composition of table salt?", "NaCl");
vinegarBasic = new BasicCard("What is the chemical composition of vinegar?", "C2H4O2");
aspirinBasic = new BasicCard("What is the chemical composition of aspirin?", "C9H8O4");
chalkBasic = new BasicCard("What is the chemical composition of a chalk?", "CaCO3");

var basicArr = [waterBasic, oxygenBasic, glucoseBasic, alcoholBasic, diamondBasic, bleachBasic, 
saltBasic, vinegarBasic, aspirinBasic, chalkBasic]

//Cloze Cards
waterCloze = new ClozeCard("H2O is the chemical composition of water.", "H2O");
oxygenCloze = new ClozeCard("O2 is the chemical composition of oxygen.", "O2");
glucoseCloze = new ClozeCard("C6H12O6 is the chemical composition of glucose.", "C6H12O6");
alcoholCloze = new ClozeCard("C2H6O is the chemical composition of alcohol.", "C2H6O");
diamondCloze = new ClozeCard("C is the chemical composition of diamond.", "C");
bleachCloze = new ClozeCard("NaCIO is the chemical composition of bleach.", "NaCIO");
saltCloze = new ClozeCard("NaCl is the chemical composition of table salt.", "NaCl");
vinegarCloze = new ClozeCard("C2H4O2 is the chemical composition of vinegar.", "C2H4O2");
aspirinCloze = new ClozeCard("C9H8O4 is the chemical composition of aspirin.", "C9H8O4");
chalkCloze = new ClozeCard("CaCO3 is the chemical composition of chalk.", "CaCO3");

var clozeArr = [waterCloze, oxygenCloze, glucoseCloze, alcoholCloze, diamondCloze, bleachCloze,
saltCloze, vinegarCloze, aspirinCloze, chalkCloze]

//Basic Card Function
function basicQuestion(question, answer){
inquirer.prompt([
    {
        type: "input",
        name: "userInput",
        message: question
      }
]).then(function(response){
    if(response.userInput === answer){
        numberCorrect++
        console.log("Correct!")
        
    }
    else{console.log("Wrong!")};

    questionNum++
    if(questionNum<10){
        basicQuestion((basicArr[questionNum].front), (basicArr[questionNum].back))
        }
    else{
        console.log("You got " + numberCorrect + "/10 correct!")
        cardTypeSelector();
    };
    });
    
};

//Cloze Card Function
function clozeQuestion(card, answer){
    card.cutCloze();
    inquirer.prompt([
        {
            type: "input",
            name: "userInput",
            message: "Type out the missing part of this statement:"
          }
    ]).then(function(response){
        if(response.userInput === answer){
            numberCorrect++
            console.log("Correct!")
        }
        else{
        console.log("Wrong!")
        };
        questionNum++
    if(questionNum<10){
        clozeQuestion((clozeArr[questionNum]), (clozeArr[questionNum].cloze))
        }
    else{
        console.log("You got " + numberCorrect + "/10 correct!")
        cardTypeSelector();
    };
    });
}


//Card Type Selection Function
function cardTypeSelector(){
inquirer.prompt([
    {
    type: "list",
      message: "Do you want to be quizzed with cloze type cards or basic Q/A cards?",
      choices: ["Basic", "Cloze"],
      name: "cardType"
}
]).then(function(response){
    
    if(response.cardType === "Basic"){
        basicQuestion(waterBasic.front, waterBasic.back);   
    }

    else{
        clozeQuestion(waterCloze, waterCloze.cloze)
    }
});
};


cardTypeSelector();



