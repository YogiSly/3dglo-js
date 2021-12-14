import { animate } from "./helpers.js";
const modal = () => {
  const modalPop = document.querySelector(".popup");
  const buttons = document.querySelectorAll(".popup-btn");

  modalPop.style.opacity = 0;

  buttons.forEach((btns) => {
    btns.addEventListener("click", () => {
      modalPop.style.display = "block";
      if (window > 768) {
        animate({
          duration: 700,
          timing(timeFraction) {
            return Math.pow(timeFraction, 5);
          },
          draw(progress) {
            modalPop.style.opacity = progress;
          },
        });
      } else {
        modalPop.style.opacity = 1;
      }
    });
  });

  modalPop.addEventListener("click", (e) => {
    if (
      !e.target.closest(".popup-content") ||
      e.target.classList.contains("popup-close")
    ) {
      if (window > 768) {
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
      } else {
        modalPop.style.opacity = 0;
        modalPop.style.display = "none";
      }
    }
  });
};
export default modal;
