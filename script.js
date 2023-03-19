const totalScore = { computerScore: 0, playerScore: 0 };

function getComputerChoice() {
  const rpsChoice = ["Rock", "Paper", "Scissors"];
  const randomNumber = Math.floor(Math.random() * 3);
  return rpsChoice[randomNumber];
}

function getResult(playerChoice, computerChoice) {
  let score;

  if (playerChoice == computerChoice) {
    score = 0;
  } else if (playerChoice == "Paper" && computerChoice == "Rock") {
    score = 1;
  } else if (playerChoice == "Scissors" && computerChoice == "Paper") {
    score = 1;
  } else if (playerChoice == "Rock" && computerChoice == "Scissors") {
    score = 1;
  } else {
    score = -1;
  }
  return score;
}
    
function showResult(score, playerChoice, computerChoice) {
  const resultDiv = document.getElementById("result");
  const PlayerScoreDiv = document.getElementById("player-score");
  const handsDiv = document.getElementById("hands");

  if (score == -1) {
    resultDiv.innerText = "You lose!";
  } else if (score == 0) {
    resultDiv.innerText = "It's a draw!";
  } else {
    resultDiv.innerText = "You won!";
  }

  handsDiv.innerText = `🧑${playerChoice} vs 🤖${computerChoice}`;
  PlayerScoreDiv.innerText = `your score: ${totalScore["playerScore"]}`;
}

function onClickRPS(playerChoice) {
  console.log({ playerChoice });
  const computerChoice = getComputerChoice();
  console.log({ computerChoice });
  const score = getResult(playerChoice, computerChoice);
  totalScore["playerScore"] += score;
  console.log({ score });
  showResult(score, playerChoice, computerChoice);
}

function playGame() {
  const rpsButtons = document.querySelectorAll(".rpsButton");

  rpsButtons.forEach((rpsButton) => {
    rpsButton.onclick = () => onClickRPS(rpsButton.value);
  });

  const endGameButton = document.getElementById("endGameButton");
  endGameButton.onclick = () => endGame(totalScore);
}

function endGame(totalScore) {
  totalScore["playerScore"] = 0;
  totalScore["computerScore"] = 0;
  const resultDiv = document.getElementById("result");
  const PlayerScoreDiv = document.getElementById("player-score");
  const handsDiv = document.getElementById("hands");
  resultDiv.innerText = "";
  PlayerScoreDiv.innerText = "";
  handsDiv.innerText = "";
}
playGame();
