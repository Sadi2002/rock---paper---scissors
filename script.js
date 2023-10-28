const rulesBtn = document.querySelector(".rules");
const rulesContainer = document.querySelector(".rules-container");
const closeBtn = document.querySelector(".close");
const overlay = document.querySelector(".overlay");
const chooseContainer = document.querySelector(".bottom-side");
const choose = document.querySelectorAll(".bottom-side div");
const fightBox = document.querySelector(".fight-box");
const playAgain = document.querySelector(".play-again");
const count = document.querySelector(".count");

let timer;

const showRulesContainer = function () {
  if (
    rulesContainer.classList.contains("hide") &&
    overlay.classList.contains("hide")
  ) {
    rulesContainer.classList.remove("hide");
    overlay.classList.remove("hide");
  } else {
    rulesContainer.classList.add("hide");
    overlay.classList.add("hide");
  }
};

const showFight = function () {
  let counter = 3;
  count.innerText = counter;

  timer = setInterval(() => {
    counter--;
    if (counter >= 1) {
      count.innerText = counter;
    } else {
      count.innerText = "";
      clearInterval(timer);
    }
  }, 1000);

  setTimeout(() => {
    chooseContainer.classList.add("none");
    fightBox.classList.remove("none");
  }, 3000);
};

const tryAgainFunc = function () {
  chooseContainer.classList.remove("none");
  fightBox.classList.add("none");
};

rulesBtn.addEventListener("click", showRulesContainer);
closeBtn.addEventListener("click", showRulesContainer);
overlay.addEventListener("click", showRulesContainer);
choose.forEach((el) => el.addEventListener("click", showFight));
playAgain.addEventListener("click", tryAgainFunc);
