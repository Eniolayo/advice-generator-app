const adviceNumber = document.querySelector(".advice-number");
const advice = document.querySelector(".advice");
const dice = document.querySelector(".dice");
dice.addEventListener("click", (e) => {
  rollDice();
});
function rollDice() {
  const randomNumber = Math.ceil(Math.random() * 200);
  fetch(`https://api.adviceslip.com/advice/${randomNumber}`)
    .then((data) => data.json())
    .then((target) => {
      adviceNumber.textContent = target.slip.id;
      advice.textContent = target.slip.advice;
    });
}
