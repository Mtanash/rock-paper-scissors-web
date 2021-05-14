// dom
let playerScoreDom = document.querySelector(".score-board .user");
let computerScoreDom = document.querySelector(".score-board .computer");
let icons = document.querySelectorAll(".icons div");
let resultText = document.querySelector(".result");

const computerAnswers = ["rock", "paper", "scissors"];
let compuerAnswer = computerAnswers[getRndInteger(0, 3)];
let playerScore = 0;
let computerScore = 0;

for (let icon of icons) {
  icon.onclick = () => {
    updateComputerAnswer();
    let rt = checkWinner(icon.className, compuerAnswer);
    updateScoreDom();
    updateColor(icon, rt);
    resultText.innerHTML = `user picked : [${icon.className}] and computer picked : [${compuerAnswer}] <br /> [${rt}]`;
  };
}

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function updateScoreDom() {
  playerScoreDom.textContent = playerScore.toString();
  computerScoreDom.textContent = computerScore.toString();
}

function updateComputerAnswer() {
  compuerAnswer = computerAnswers[getRndInteger(0, 3)];
}

function updateColor(icon, result) {
  if (result == "You Lost") {
    icon.classList.add("lose");
    setTimeout(() => {
      icon.classList.remove("lose");
    }, 1000);
  } else if (result == "You won") {
    icon.classList.add("win");
    setTimeout(() => {
      icon.classList.remove("win");
    }, 1000);
  } else {
    icon.classList.add("draw");
    setTimeout(() => {
      icon.classList.remove("draw");
    }, 1000);
  }
}

function checkWinner(userAnswer, computerAnswer) {
  if (userAnswer == "rock") {
    if (computerAnswer == "rock") {
      return "it's a Draw";
    } else if (computerAnswer == "paper") {
      computerScore += 1;
      return "You Lost";
    } else if (computerAnswer == "scissors") {
      playerScore += 1;
      return "You won";
    }
  } else if (userAnswer == "paper") {
    if (computerAnswer == "rock") {
      playerScore += 1;
      return "You won";
    } else if (computerAnswer == "paper") {
      return "it's a Draw";
    } else if (computerAnswer == "scissors") {
      computerScore += 1;
      return "You Lost";
    }
  } else if (userAnswer == "scissors") {
    if (computerAnswer == "rock") {
      computerScore += 1;
      return "You Lost";
    } else if (computerAnswer == "paper") {
      playerScore += 1;
      return "You won";
    } else if (computerAnswer == "scissors") {
      return "it's a Draw";
    }
  }
}
