const rulesBtn = document.querySelector(".rules");
const rulesContainer = document.querySelector(".rules-container");
const closeBtn = document.querySelector(".close");
const overlay = document.querySelector(".overlay");
const chooseContainer = document.querySelector(".bottom-side");
const choose = document.querySelectorAll(".bottom-side div");
const fightBox = document.querySelector(".fight-box");
const playAgain = document.querySelector(".play-again");
const count = document.querySelector(".count");
const fightBoxImg = document.querySelector(".fight-box img");
const fightBoxMe = document.querySelector(".fight-box .me div");
const computer = document.querySelector(".computer img");
const result = document.querySelector(".result");
const score = document.querySelector(".score");

let timer;
let scoreCount = 0;
score.textContent = scoreCount;

const randomSrcs = [
  "./images/icon-rock.svg",
  "./images/icon-paper.svg",
  "./images/icon-scissors.svg",
];

const showRulesContainer = function () {
  const isHidden = rulesContainer.classList.contains("hide");
  const shouldHideOverlay = isHidden && overlay.classList.contains("hide");

  rulesContainer.classList.toggle("hide", !isHidden);
  overlay.classList.toggle("hide", !shouldHideOverlay);
};

const showFight = function (e) {
  const randomNum = Math.floor(Math.random() * randomSrcs.length);
  const getRandomSrc = randomSrcs[randomNum];

  computer.src = getRandomSrc;

  count.style.display = "flex";
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
    count.style.display = "none";
  }, 3000);

  const choiceId = e.target.id;
  if (choiceId === "rock") {
    fightBoxMe.classList.add("rk");
    fightBoxImg.src = "./images/icon-rock.svg";
  } else if (choiceId === "scissors") {
    fightBoxMe.classList.add("sci");
    fightBoxImg.src = "./images/icon-scissors.svg";
  } else {
    fightBoxMe.classList.add("pap");
    fightBoxImg.src = "./images/icon-paper.svg";
  }

  const computerChoice = computer.src.split("/").pop();
  const playerChoice = fightBoxImg.src.split("/").pop();

  if (computerChoice === playerChoice) {
    result.textContent = "Draw";
  } else if (
    (playerChoice === "icon-rock.svg" &&
      computerChoice === "icon-scissors.svg") ||
    (playerChoice === "icon-paper.svg" && computerChoice === "icon-rock.svg") ||
    (playerChoice === "icon-scissors.svg" &&
      computerChoice === "icon-paper.svg")
  ) {
    result.textContent = "You win";
    setTimeout(() => {
      scoreCount++;
      score.textContent = scoreCount;
    }, 3000);
  } else {
    result.textContent = "You lose";
  }
};

const tryAgainFunc = function () {
  chooseContainer.classList.remove("none");
  fightBox.classList.add("none");
  fightBoxMe.classList.add("rk");
  fightBoxMe.className = "";
};

rulesBtn.addEventListener("click", showRulesContainer);
closeBtn.addEventListener("click", showRulesContainer);
overlay.addEventListener("click", showRulesContainer);
choose.forEach((el) => el.addEventListener("click", showFight));
playAgain.addEventListener("click", tryAgainFunc);
