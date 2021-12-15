//rock, paper, scissors
//create a fuction that selects a random number 1-3 using math.random.  if number is 1 return rock. If number is 2 return paper. If number is 3 return scissors
// create a function that takes in two parameters(player choice, computer choice) and return a string that declares the winner.

let rockButton = document.getElementById('rockbtn');
let paperButton = document.getElementById('paperbtn');
let scissorsButton = document.getElementById('scissorsbtn');
let playerPoints = document.getElementById('playerpoints');
let computerPoints = document.getElementById('computerpoints')
let announceWinner = document.getElementById('para2');
let compSelect = document.getElementById('compselect');



let input = "";
let playerAddPoint = 0;
let computerAddPoint = 0;
let moves = 5;

rockButton.addEventListener("click", function Rock(){
	input = "rock"
	playGame()
});
paperButton.addEventListener("click", function Paper() {
	input = "paper"
	playGame()
});
scissorsButton.addEventListener("click", function Scissors() {
	input = "scissors"
	playGame()
});



let computerPlay = () => {
	gameNum = Math.floor(Math.random() * 3) + 1;
	let result;
	

	if(gameNum === 1){
		result = "rock";
	}
	else if(gameNum===2){
		result = "paper";
	}
	else{
		result = "scissors";
	}
	return result;
}


function playGame(playerSelection, computerSelection){
	
	playerSelection = input;
	computerSelection = computerPlay();
	while(moves > 0){

	switch (playerSelection){
		case 'rock':
				if(computerSelection === "rock"){
					compSelect.textContent = "Computer Selection: "  + computerSelection
					announceWinner.textContent = "This round is a tie!"
				}
				else if(computerSelection === "scissors"){
					compSelect.textContent = "Computer Selection: "  + computerSelection
					announceWinner.textContent = "You win this round! Rock beats Scissors"
					playerAddPoint = playerAddPoint+=1
				}
				else{
					compSelect.textContent = "Computer Selection: "  + computerSelection
					announceWinner.textContent = "You lose this round! Paper beats Rock"
					computerAddPoint = computerAddPoint+=1
				}
				
				playerPoints.textContent = playerAddPoint;
				computerPoints.textContent = computerAddPoint;
				moves -=1
				break;

		case 'paper':
				if(computerSelection === "rock"){
					compSelect.textContent = "Computer Selection: "  + computerSelection
					announceWinner.textContent = "You win this round! Paper beats Rock"
					playerAddPoint = playerAddPoint+=1

				}
				else if(computerSelection === "scissors"){
					compSelect.textContent = "Computer Selection: "  + computerSelection
					announceWinner.textContent = "You lose this round! Scissors beat Paper"
					computerAddPoint = computerAddPoint+=1
				}
				else{
					compSelect.textContent = "Computer Selection: "  + computerSelection
					announceWinner.textContent = "This round is a tie!"
				}
				
				playerPoints.textContent = playerAddPoint;
				computerPoints.textContent = computerAddPoint;
				moves-=1
				break;

		case 'scissors':
				if(computerSelection === "rock"){
					compSelect.textContent = "Computer Selection: "  + computerSelection
					announceWinner.textContent = "You lose this round. Rock beats Scissors"
					computerAddPoint = computerAddPoint+=1
				}
				else if(computerSelection === "scissors"){
					compSelect.textContent = "Computer Selection: "  + computerSelection
					announceWinner.textContent = "This round is a tie"
				}
				else{
					compSelect.textContent = "Computer Selection: "  + computerSelection
					announceWinner.textContent = "You win this round! Scissors beat paper"
					playerAddPoint = playerAddPoint+=1
				}
				playerPoints.textContent = playerAddPoint;
				computerPoints.textContent = computerAddPoint;
				moves-=1;
		}		break;

	}
	if(moves === 0){
		chooseWinner();
		gameOver();

	}
}


function gameOver(){
	document.getElementById('rockbtn').style.display = 'none';
	document.getElementById('paperbtn').style.display = 'none';
	document.getElementById('scissorsbtn').style.display = 'none';
	compSelect.style.display = 'none';
	document.getElementById('para1').textContent= 'Game Over!!!';
}

function chooseWinner(){
	if(playerAddPoint > computerAddPoint){
		announceWinner.textContent = "You Win the Game!!!!"
	}
	else if(playerAddPoint === computerAddPoint){
		announceWinner.textContent = "The Game is a Tie"
	} else {
		announceWinner.textContent = "You Lose the Game!"
	}
}


