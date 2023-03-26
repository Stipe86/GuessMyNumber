"use strict";

const giveRandomNumber = function () {
  let randomNumb = Math.trunc(Math.random() * 20) + 1;
  console.log(randomNumb);
  return randomNumb;
};

// let numberToGuess = document.querySelector(".number").value =
//   giveRandomNumber();

let numberToGuess = document.querySelector(".number").value;

numberToGuess = giveRandomNumber();

console.log("Check numberToGuess: " + numberToGuess);

let scoreNumber = Number(document.querySelector(".score").textContent);

console.log("check score: " + scoreNumber);

let highScoreNumber = Number(document.querySelector(".highscore").textContent);

console.log("check highscore: " + highScoreNumber);

// console.log(document.querySelector(".number").value);

// const x = function () {
//   const numberInput = Number(document.querySelector(".guess").value);
//   console.log(numberInput, typeof numberInput);
// };

document.querySelector(".again").addEventListener("click", function () {
  numberToGuess = giveRandomNumber();
  document.querySelector(".check").disabled = false;
  document.querySelector(".guess").disabled = false;
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".message").textContent = "Start guessing...";
  scoreNumber = 20;
  document.querySelector(".score").textContent = scoreNumber;
  document.querySelector(".guess").value = "";
});

document.querySelector(".check").addEventListener("click", function () {
  const numberInput = Number(document.querySelector(".guess").value);
  // console.log(numberInput, typeof numberInput);

  if (!numberInput) {
    document.querySelector(".message").textContent = "⛔ No number";
  } else if (numberInput < 0 || numberInput > 20) {
    document.querySelector(".message").textContent =
      "⛔ Not a number between 1 and 20";
  } else if (
    scoreNumber === 1 &&
    (numberInput < numberToGuess || numberInput > numberToGuess)
  ) {
    document.querySelector(".message").textContent = "💀 You lost the game!";
    scoreNumber--;
    document.querySelector(".score").textContent = scoreNumber;
    document.querySelector("body").style.backgroundColor = "red";
    document.querySelector(".check").disabled = true;
    document.querySelector(".guess").disabled = true;
  } else if (numberInput < numberToGuess) {
    document.querySelector(".message").textContent = "Too Low!";
    scoreNumber--;
    document.querySelector(".score").textContent = scoreNumber;
  } else if (numberInput > numberToGuess) {
    document.querySelector(".message").textContent = "Too High!";
    scoreNumber--;
    document.querySelector(".score").textContent = scoreNumber;
  } else if (numberInput === numberToGuess) {
    document.querySelector(".message").textContent = "🎉 Correct number!";
    document.querySelector(".number").style.width = "30rem";
    document.querySelector(".number").textContent = numberToGuess;
    if (highScoreNumber < scoreNumber) {
      highScoreNumber = scoreNumber;
    }

    document.querySelector(".highscore").textContent = highScoreNumber;
    document.querySelector("body").style.backgroundColor = "#60b347";

    // document.querySelector(".check").addEventListener("click", function () {

    // });
    document.querySelector(".check").disabled = true;
    document.querySelector(".guess").disabled = true;
  }
});

// while (true) {
//   document.querySelector(".number").value = giveRandomNumber();
// }
