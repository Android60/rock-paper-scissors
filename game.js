
var items = ['rock','paper','scissors'];

function computerPlay() {
	let choice = items[Math.floor(Math.random() * 3)];
	return choice;
}


function playRound(playerSelection, computerSelection) {
	playerSelection = playerSelection.toLowerCase();
	if(((playerSelection=="rock")&&(computerSelection=="scissors"))||((playerSelection=="paper")&&(computerSelection=="rock"))||((playerSelection=="scissors")&&(computerSelection=="paper")))
		return "You win!";
		else return "You loose";
}

const playerSelection = 'rock'
const computerSelection = computerPlay()
console.log(computerSelection);
console.log(playRound(playerSelection, computerSelection))