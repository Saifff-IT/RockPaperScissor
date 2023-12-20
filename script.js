const boxes = document.querySelectorAll(".box");
const yourScore = document.getElementById("your");
const compScore = document.getElementById("comp");
const result = document.querySelector(".result");

const check = (userChoice) => {
  let choices = ["rock", "paper", "scissor"];
  let rand = Math.floor(Math.random() * 3);
  let compChoice = choices[rand];

  if (compChoice === userChoice) {
    result.style.backgroundColor = "white";
    result.style.color = "black";
    result.innerText = `Draw! Computer also chose ${compChoice}`;
  } else {
    if (
      (compChoice === "rock" && userChoice === "paper") ||
      (compChoice === "paper" && userChoice === "scissor") ||
      (compChoice === "scissor" && userChoice === "rock")
    ) {
      result.style.backgroundColor = "green";
      result.style.color = "white";
      result.innerText = `You win, computer chose ${compChoice}`;
      yourScore.innerText++;
    } else {
      result.style.backgroundColor = "red";
      result.style.color = "white";
      result.innerText = `You Lose, computer chose ${compChoice}`;
      compScore.innerText++;
    }
  }
};
boxes.forEach((box) => {
  box.addEventListener("click", (e) => {
    let userChoice = box.getAttribute("id");
    check(userChoice);
  });
});
