/*GLOBAL OBJECTS*/
const rock ={"paper":0,"scissor":1,"rock":1}; 
const paper ={"paper":1,"scissor":0,"rock":1};
const scissor ={"paper":1,"scissor":1,"rock":0};
const elements ={"paper": paper,"scissor":scissor,"rock":rock}
/*GLOBAL OBJECTS*/ 

const playerSelection = userPlay();
const computerSelection = computerPlay();
const gameResult = playRound(playerSelection,computerSelection);

console.log(gameResult);

game();


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
    return `The result is draw because both players selected ${pSelection}`;


}
function game(){
    let result;
    let userScore = 0;
    let computerScore = 0;
    console.log('Rock Paper Scissor Tournanment of 5 rounds');
    console.log('Game starting...');
    for(let i=0;i<5;i++){
        console.log(`ROUND ${i+1}`);

        const pSelection = userPlay();
        const cSelection = computerPlay();
        result = playRound(pSelection,cSelection);
        console.log(result);

        if(result.includes('win')){
            userScore+=1;
        }
        else if(result.includes('lose')){
            computerScore+=1;
        }


    }
    
    let gameCondition=userScore>computerScore?0:1;
    console.log(`Your score: ${userScore}, CPU score: ${computerScore}.`)

    switch(gameCondition){
        case 0:
            console.log('You lose!');
            break;
        case 1:
            /*check for draw*/ 
            if(userScore==computerScore){
                console.log('No one wins');
            }
            else{
                console.log('You win!');
            }

            
    }
    
}
/*Game*/ 