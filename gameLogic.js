let roundWinner;
let totalRoundsPlayed = 0
let playerWins = 0
let computerWins = 0
let tiedGames = 0

let computerChoice;
let playerchoice;

const rockButton = document.querySelector('#rock');
const paperButton = document.querySelector('#paper');
const scissorsButton = document.querySelector('#scissors');


rockButton.addEventListener('click', () =>{
    playerchoice = 'rock'
    playRound(computerChoice, playerchoice)
})

paperButton.addEventListener('click', () =>{
    playerchoice = 'paper'
    playRound(computerChoice, playerchoice)
})

scissorsButton.addEventListener('click', () =>{
    playerchoice = 'scissors'
    playRound(computerChoice, playerchoice)
})

//test
function getComputerSelection(){
    let ranNumber = Math.floor(Math.random() * 3)
    let compChoice;
    switch(ranNumber) {
        case 0:
            compChoice = 'paper'
            break;
        case 1:
            compChoice = 'rock'
            break;
        case 2:
            compChoice = 'scissors'
            break;
        default:
            return 'What?'
    }
    console.log("Computer choice: " + compChoice)
    return compChoice
}

// function getPlayerSelection(){
//     let playerchoice = prompt("Please type Rock, Paper, or Scissors: ", "Type your answer here")
//     let lowerCasePlayerChoice = playerchoice.toLowerCase()
//     console.log("Computer choice: " + lowerCasePlayerChoice)
//     return lowerCasePlayerChoice
// }

function playRound(computerChoice, playerSelection){

    computerChoice = getComputerSelection()
    playerChoice = playerSelection;

    if(computerChoice == playerChoice){
        console.log("It's a tie!")
        roundWinner = "Its a tie"
        tiedGames++
        totalRoundsPlayed++
    }
    if ((playerchoice == "paper" && computerChoice == 'rock') ||
        (playerchoice == "rock" && computerChoice == 'scissors') ||
        (playerchoice == "scissors" && computerChoice == 'paper'))
        {
            console.log(`Player Wins! ${playerchoice} beats ${computerChoice}!` )
            roundWinner = "player"
            totalRoundsPlayed++
            playerWins++
            
        }

    if ((computerChoice == "paper" && playerchoice == 'rock') ||
        (computerChoice == "rock" && playerchoice == 'scissors') ||
        (computerChoice == "scissors" && playerchoice == 'paper'))
        {
            console.log(`You lose! ${computerChoice} beats ${playerchoice}!` )
            roundWinner = "computer"
            totalRoundsPlayed++
            computerWins++
        }
    console.log("\nRound Winner: " + roundWinner +"\n\nPlayer wins: " + playerWins + "\nComputer Wins: " + computerWins + "\nTies: " + tiedGames + "\nTotal Rounds played: " + totalRoundsPlayed)
}

function game(){
    if(playerWins == computerWins){
        console.log("\nThe final score is a tie!")
    }
    if(playerWins > computerWins){
        console.log("\nPlayer Wins the match!")
    }
    else{
        console.log("\nThe Computer wins the match!")
    }

}

