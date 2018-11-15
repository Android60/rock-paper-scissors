
let items = ['rock','paper','scissors'];
let score = {
	"player" : 0,
	"computer": 0,
	"winner": "none"
};

function computerPlay() {
	let choice = items[Math.floor(Math.random() * 3)];
	return choice;
}


function playRound(playerSelection, computerSelection) {
	playerSelection = playerSelection.toLowerCase();
	if(((playerSelection=="rock")&&(computerSelection=="scissors"))||((playerSelection=="paper")&&(computerSelection=="rock"))||((playerSelection=="scissors")&&(computerSelection=="paper"))){
		score.player++;
		console.log("Score: "+score.player + "|" + score.computer);
		return "You win: " + playerSelection + " beats "+ computerSelection + "!";
	}
	else if(playerSelection==computerSelection){
		return "It's a tie!"
	}
	else {
		score.computer++;
		console.log("Score: "+score.player + "|" + score.computer);
		return "You loose: " + computerSelection + " beats " + playerSelection + "!";
	}
}

function game() {
	score.player = 0;
	score.computer = 0;
	for(let i=0; i<5; i++) {
		console.log(playRound(prompt('Choose item: rock, scissors or paper'),computerPlay()));
	}
	if (score.player > score.computer) console.log("You are winner!");
		else if (score.player == score.computer) console.log("It's a dead heat!");
			else console.log("Computer won!");
	console.log("Final score: " + score.player + "|" + score.computer);
}

game();
