/*GLOBAL OBJECTS*/
const rock ={"paper":0,"scissor":1,"rock":1}; 
const paper ={"paper":1,"scissor":0,"rock":1};
const scissor ={"paper":1,"scissor":1,"rock":0};
const elements ={"paper": paper,"scissor":scissor,"rock":rock}
/*GLOBAL OBJECTS*/ 

const playerSelection = userPlay();
const computerSelection = computerPlay();
console.log(playerSelection);
console.log(computerSelection);
const gameResult = playRound(playerSelection,computerSelection);

console.log(gameResult);


/* Returns User/Cpu guess */
function userPlay(){
    let userGuess = prompt('It/s Rock Paper Scissors time! Pick a guess:');

    userGuess =userGuess.toLowerCase();
    let validInput = guess=>(guess=="rock"||guess=="paper"||guess=="scissor");

    while(!(validInput(userGuess))){
        userGuess = prompt('Invalid Input.Please pick a valid guess.');
        userGuess =userGuess.toLowerCase();
    }

    return userGuess;

}
function computerPlay(){
    console.log('Waiting for computer/s guess...')
    let condition =Math.round(Math.random()*2); /*Random Number between 0-2*/
    

    switch(condition){
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissor";
    }
}
/* Returns User/Cpu guess */
/*Game*/
function playRound(pSelection,cSelection){
    let userElement = elements[pSelection];
    let computerElement = elements[cSelection];

    let userScore = userElement[cSelection];
    let computerScore = computerElement[pSelection];

    if(userScore!=computerScore){

        if(userScore>computerScore){
            return `${pSelection} beats ${cSelection}. You win!`;
        }
        else{
            return `${cSelection} beats ${pSelection}. You lose!`;
        }

    }
    return `The result is Draw because both players selected ${pSelection}`;


}
/*Game*/ 