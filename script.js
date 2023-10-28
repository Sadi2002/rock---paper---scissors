const rulesBtn = document.querySelector(".rules");
const rulesContainer = document.querySelector(".rules-container");
const closeBtn = document.querySelector(".close");
const overlay = document.querySelector(".overlay");

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

rulesBtn.addEventListener("click", showRulesContainer);
closeBtn.addEventListener("click", showRulesContainer);
