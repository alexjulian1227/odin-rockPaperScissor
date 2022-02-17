
let playerScore = 0;
let computerScore = 0;

function computerPlay(){
    const randomNumber = Math.floor((Math.random() * 3));
    return randomNumber
}
function gamePlay(playerSelection, computerSelection){
    const hand = ['Rock', 'Paper', 'Scissor']
    const computerChoice = hand[computerSelection].toLowerCase();
    console.log(`=============================`);
    console.log(`You choose ${playerSelection}`);
    console.log(`Computer choose ${computerChoice}`);
    console.log(`=============================`);
    let msg = '';
    

    if (playerSelection === 'rock' && computerChoice === 'scissor'){
        playerScore += 1;
        msg = `You win! Rock beats Scissor`;
    }
    else if (playerSelection === 'rock' && computerChoice === 'paper'){
        computerScore += 1;
        msg = `You lose! Paper beats rock`;
    }

    else if (playerSelection === 'paper' && computerChoice === 'rock'){
        playerScore += 1;
        msg = `You win! Paper beats rock`;
    }
    else if (playerSelection === 'paper' && computerChoice === 'scissor'){
        computerScore += 1;
        msg = `You lose! Scissor beats paper`
    }

    else if(playerSelection === 'scissor' && computerChoice === 'paper'){
        playerScore += 1;
        msg = `You win! Scissor beats paper`;
    }
    else if(playerSelection ==='scissor' && computerChoice === 'rock'){
        computerScore += 1;
        msg = `You lose! Rock beats scissor`;
    }

    else if(playerSelection === 'rock' && computerChoice === 'rock'){
        msg = `Its a draw!`
    }
    else if(playerSelection === 'paper' && computerChoice === 'paper'){
        msg = `Its a draw!`
    }
    else if(playerSelection === 'scissor' && computerChoice === 'scissor'){
        msg = `Its a draw!`
    }
    else {
        msg = `Something is wrong :D`
    }

    return console.log(msg)
}


for (let i = 0; i < 5; i++){
    let chooseHand = prompt("Rock, Paper or Scissor? ").toLowerCase();
    gamePlay(chooseHand, computerPlay());
    console.log(`Your score: ${playerScore}`)
    console.log(`Computer score: ${computerScore}`);
    console.log(`=============================`);
}

if (playerScore > computerScore){
    console.log(`Congratulations! You win!`)
}
else if(playerScore === computerScore){
    console.log(`It's a draw! Play another round`)
}
else {
    console.log(`So unlucky! Better luck next time....`)
}
