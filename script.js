"use strict";
let score = 20;
let highScore = 0;
const secretNumber = Math.ceil(Math.random() * 20);
const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  //where is no input
  if (!guess) {
    displayMessage("⛔No Number");
    //when player wins
  } else if (guess == secretNumber) {
    document.querySelector(".number").textContent = secretNumber;
    displayMessage("🎊 Correct Number");
    //change css style
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    //for the highScore
    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
    //when guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? "↗️Too High!" : "⬇️Too Low!");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("🔥You lost the game ");
      document.querySelector(".score").textContent = 0;
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  displayMessage("Start Guessing...");
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
