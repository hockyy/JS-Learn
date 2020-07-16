const startGameBtn = document.getElementById("start-game-btn");

const ROCK = "Rock";
const PAPER = "Paper";
const SCISSORS = "Scissors";

const getPlayerChoice = function() {
  let selection = (prompt(`${ROCK}, ${PAPER}, or ${SCISSORS}?`) || "null").toLowerCase();
  if (
    selection !== ROCK.toLowerCase() &&
    selection !== PAPER.toLowerCase() &&
    selection !== SCISSORS.toLowerCase()
  ) {
    alert(`Unknown choice, ${ROCK} selected as default`);
    selection = ROCK.toLowerCase();
  }
  return selection;
}

const getComputerChoice = function () {
  const randomValue = Math.floor(Math.random()*3);
  sel = [ROCK, PAPER, SCISSORS];
  return sel[randomValue].toLowerCase();
}

function test(a = "5"){
  alert(a);
}

test(5);
test(null);

/**
 * Returns 1, if player wins, 0 if draw, -1 if lose
 * @param {The player's selection} playerSelection 
 * @param {Computer's selection} computerSelection 
 */
function getResult(playerSelection, computerSelection){
  if(playerSelection == computerSelection) return 0;
  if(playerSelection == ROCK.toLowerCase()){
    if(computerSelection == SCISSORS.toLowerCase()) return 1;
    else return -1;
  }else if(playerSelection == PAPER.toLowerCase()){
    if(computerSelection == ROCK.toLowerCase()) return 1;
    else return -1;
  }else{
    if(computerSelection == PAPER.toLowerCase()) return 1;
    else return -1;
  }
}

startGameBtn.addEventListener("click", function startGame() {
  gameIsRunning = true;
  console.log("Game is starting...");
  const playerSelection = getPlayerChoice();
  const computerSelection = getComputerChoice();
  console.log(`Player selects ${playerSelection}`);
  console.log(`Computer selects ${computerSelection}`)
  alert(`Player selects ${playerSelection}`);
  alert(`Computer selects ${computerSelection}`)
  result = getResult(playerSelection, computerSelection)
  if(result == 0){
    alert("Its a Drawww!!")
  }else if(result < 0){
    alert("You lose!");
  }else{
    alert("Congratulations, You win!");
  }
});
