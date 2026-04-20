let player1Score = 0;
let player2Score = 0;
let player1Turn = true;

let player1Dice = document.getElementById("player1Dice");
let player2Dice = document.getElementById("player2Dice");

let player1Scoreboard = document.getElementById("player1Scoreboard");
let player2Scoreboard = document.getElementById("player2Scoreboard");

let message = document.getElementById("message");

function randomNumber() {
  let dice = Math.floor(Math.random() * 6) + 1;
  return dice;
}

function renderScore() {
  player1Scoreboard.textContent = player1Score;
  player2Scoreboard.textContent = player2Score;
  if (player1Score >= 20) {
    message.textContent = "Player 1 Has Won The Game!!";
    message.style.color = "green";
    player1Scoreboard.style.color = "green"
    rollButton.disabled = true;
  } else if (player2Score >= 20) {
    message.textContent = "Player 2 Has Won The Game!!";
    message.style.color = "Blue";
    player2Scoreboard.style.color = "Blue"
    rollButton.disabled = true;
  }
}

let rollButton = document.getElementById("rollBtn");
let resetButton = document.getElementById("resetBtn");

rollButton.addEventListener("click", function () {
  if (rollButton.disabled) return;
  let dice = randomNumber();
  if (player1Turn) {
    player1Score += dice;
    player1Dice.textContent = "🎲 " + dice;
    player1Turn = false;
    message.textContent = "Player 2 Turn";
  } else {
    player2Score += dice;
    player2Dice.textContent = "🎲 " + dice;
    player1Turn = true;
    message.textContent = "Player 1 Turn";
  }

  renderScore();
});

resetButton.addEventListener("click", function () {
  player1Turn = true;
  player1Score = 0;
  player2Score = 0;
  player1Dice.textContent = "-";
  player2Dice.textContent = "-";
  message.textContent = "Player 1 Turn";
  rollButton.disabled = false;
  message.style.color = "Black";
  player1Scoreboard.style.color = "black"
  player2Scoreboard.style.color = "black"
  renderScore();
});
