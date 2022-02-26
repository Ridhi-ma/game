"use strict";
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModel = document.querySelector(".close-modal");
const btnsOpenModel = document.querySelectorAll(".show-modal");
console.log(btnsOpenModel);
for (let i = 0; i < btnsOpenModel.length; i++)
  btnsOpenModel[i].addEventListener("click", () => {
    console.log("Button clicked");
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
  });
const close = () => {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};
btnCloseModel.addEventListener("click", close);
overlay.addEventListener("click", close);
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    close();
  }
});
/*const close=()=>{
    modal.classList.add("hidden");
  overlay.classList.add("hidden");
}*/
