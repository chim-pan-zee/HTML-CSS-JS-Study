const computer = document.getElementById("computer");
const playerElement = document.getElementById("player");

const buttons = document.querySelectorAll(".buttons button");

const rock = document.getElementById("rock");
const scissor = document.getElementById("scissor");
const paper = document.getElementById("paper");

const result = document.querySelector(".result");

const rockscissorpaper = ["rock", "scissor", "paper"];
const getRandomOption = () => rockscissorpaper[Math.floor(Math.random() * 3)];

const buttonClick = function () {
  const playerChoice = this.id;
  const computerChoice = getRandomOption();

  player.textContent = playerChoice;
  computer.textContent = computerChoice;

  if (playerChoice === computerChoice) {
    result.textContent = "비김";
  } else if (
    (playerChoice === "rock" && computerChoice === "scissor") ||
    (playerChoice === "scissor" && computerChoice === "paper") ||
    (playerChoice === "paper" && computerChoice === "rock")
  ) {
    result.textContent = "이김";
  } else {
    result.textContent = "짐";
  }
};

buttons.forEach((button) => {
  button.addEventListener("click", buttonClick);
});
