import { animate } from "./helpers.js";
const modal = () => {
  const modalPop = document.querySelector(".popup");
  const buttons = document.querySelectorAll(".popup-btn");

  modalPop.style.opacity = 0;

  buttons.forEach((btns) => {
    btns.addEventListener("click", () => {
      modalPop.style.display = "block";
      animate({
        duration: 700,
        timing(timeFraction) {
          return Math.pow(timeFraction, 5);
        },
        draw(progress) {
          modalPop.style.opacity = progress;
        },
      });
    });
  });

  modalPop.addEventListener("click", (e) => {
    if (
      !e.target.closest(".popup-content") ||
      e.target.classList.contains("popup-close")
    ) {
      animate({
        duration: 550,
        timing(timeFraction) {
          return Math.pow(timeFraction, 5);
        },
        draw(progress) {
          modalPop.style.opacity = 1 - progress;
        },
      });
      setTimeout(() => {
        modalPop.style.display = "none";
      }, 550);
    }
  });
};
export default modal;
