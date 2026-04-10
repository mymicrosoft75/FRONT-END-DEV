alert(
  "Rules:\n1.Start Game will cost you \$10.\n2.If you get a BlackJack,you will awarded with \$200.\n3.You are given a balance of \$200 for testing purpose.",
);

let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");
let cards = [];

console.log(cards);

function getRandomNumber() {
  let randomNumber = Math.floor(Math.random() * 13) + 1;
  if (randomNumber === 1) {
    return 11;
  } else if (randomNumber >= 10) {
    return 10;
  } else {
    return randomNumber;
  }
}

function startGame() {
  if (player.chips >= 10) {
    isAlive = true;
    hasBlackJack = false;
    cards = [];
    sum = 0;
    let firstNumber = getRandomNumber();
    let secondNumber = getRandomNumber();
    cards.push(firstNumber);
    cards.push(secondNumber);
    sum = firstNumber + secondNumber;
    renderGame();
    player.chips -= 10;
    renderPlayer();
  }
}

let player = {
  name: "Rahul Das",
  chips: 200,
};

let playerEl = document.getElementById("player-el");
playerEl.textContent = player.name + ": $" + player.chips

function renderPlayer() {
  playerEl.textContent = player.name + ": $" + player.chips;
}

function renderGame() {
  if (sum < 21) {
    message = "Draw a new card...";
  } else if (sum === 21) {
    message = "You've got the BlackJack. ";
    hasBlackJack = true;
    player.chips += 200;
    renderPlayer();
  } else {
    if(player.chips > 0){
    message = "Try again!";
    }else {
      message = "You lost all your money!"
    }
    isAlive = false;
  }
  messageEl.textContent = message;
  sumEl.innerText = "Sum: " + sum;

  let cardstr = "Cards: ";
  for (let i = 0; i < cards.length; i++) {
    cardstr += " " + cards[i];
  }

  cardsEl.innerText = cardstr;
}

function newCard() {
  if (isAlive === true && hasBlackJack === false) {
    let card = getRandomNumber();
    cards.push(card);
    sum += card;
    renderGame();
  }
}
