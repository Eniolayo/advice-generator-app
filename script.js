const adviceNumber = document.querySelector(".advice-number");

const advice = document.querySelector(".advice");

const dice = document.querySelector(".dice");

const diceImg = document.querySelector(".dice img");

dice.addEventListener("click", () => {
  diceImg.style.animation = "rollDice 1s linear alternate";
  const randomNumber = Math.ceil(Math.random() * 210);
  fetch(`https://api.adviceslip.com/advice/${randomNumber}`)
    .then((data) => data.json())
    .then((target) => {
      adviceNumber.textContent = target.slip.id;
      advice.textContent = target.slip.advice;
    });
});

rollDice();
