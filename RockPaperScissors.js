const playerSelection = userPlay();
const computerSelection = computerPlay();
console.log(playerSelection);
console.log(computerSelection);
/* Returns User/Cpu guess */
function userPlay(){
    let userGuess = prompt('It/s Rock Paper Scissors time! Pick a guess:');

    userGuess =userGuess.toLowerCase();
    let validInput = guess=>(guess=="rock"||guess=="paper"||guess=="scissors");

    while(!(validInput(userGuess))){
        userGuess = prompt('Invalid Input.Please pick a valid guess.');
        userGuess =userGuess.toLowerCase();
    }

    return userGuess;

}
function computerPlay(){
    console.log('Waiting for computer/s guess...')
    let condition =Math.round(Math.random()*2); /*Random Number between 0-2*/
    console.log(condition);

    switch(condition){
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}
/* Returns User/Cpu guess */