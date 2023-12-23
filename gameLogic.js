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
const playerScore = document.querySelector('#playerScoreDisplay')
const ComputerScore = document.querySelector('#computerScoreDisplay')
const tieScore = document.querySelector('#tieScoreDisplay')
const gameplay = document.querySelector('#gameplay')
const currentScore = document.querySelector('#currentScore')
const makeChoice = document.querySelector("#makeChoice")
const replayButton = document.querySelector('#replayButton')
const buttonsSection = document.querySelector('buttons')





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

replayButton.addEventListener('click', restartGame)

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

function restartGame(){
    totalRoundsPlayed = 0;
    playerWins = 0;
    computerWins = 0;
    tiedGames = 0;
    rockButton.className = "visible"
    scissorsButton.className = "visible"
    paperButton.className = "visible"
    gameplay.className = "visible"
    currentScore.textContent = "Current Score"
    playerScore.textContent = `Player: ${playerWins}`
    ComputerScore.textContent = `Computer: ${computerWins}`
    tieScore.textContent = `Tie: ${tiedGames}`
    gameplay.textContent = ''
    makeChoice.textContent = "Make your choice"
    
}

function playRound(computerChoice, playerSelection){

    computerChoice = getComputerSelection()
    playerChoice = playerSelection;

    
    if(computerChoice == playerChoice){
        gameplay.textContent = ("It's a tie!")
        roundWinner = "Its a tie"
        tiedGames++
        totalRoundsPlayed++
    }
    if ((playerchoice == "paper" && computerChoice == 'rock') ||
        (playerchoice == "rock" && computerChoice == 'scissors') ||
        (playerchoice == "scissors" && computerChoice == 'paper'))
        {
            gameplay.textContent = `You win this round! ${playerchoice} beats ${computerChoice}!`
            roundWinner = "player"
            totalRoundsPlayed++
            playerWins++
            
        }

    if ((computerChoice == "paper" && playerchoice == 'rock') ||
        (computerChoice == "rock" && playerchoice == 'scissors') ||
        (computerChoice == "scissors" && playerchoice == 'paper'))
        {
            gameplay.textContent = (`You lose this round. ${computerChoice} beats ${playerchoice}!` )
            roundWinner = "computer"
            totalRoundsPlayed++
            computerWins++
        }
    if (totalRoundsPlayed >= 5 ){
        gameOverMessage()
    }
    playerScore.textContent = `Player: ${playerWins}`
    ComputerScore.textContent = `Computer: ${computerWins}`
    tieScore.textContent = `Tie: ${tiedGames}`
}

function gameOverMessage(){
    rockButton.className = "hidden"
    scissorsButton.className = "hidden"
    paperButton.className = "hidden"
    gameplay.className = "hidden"
    currentScore.textContent = "Final Score"


    if(playerWins === computerWins){
        makeChoice.textContent = ("\nThe final score is a tie!")
    }
    else if(playerWins > computerWins){
        makeChoice.textContent =("\nPlayer Wins the match!")
    }
    else{
        makeChoice.textContent =("\nThe Computer wins the match!")
    }
}

