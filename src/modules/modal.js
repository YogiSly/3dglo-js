const modal = () => {
  const modalPop = document.querySelector(".popup");
  const buttons = document.querySelectorAll(".popup-btn");

  modalPop.style.opacity = 0;

  const showModal = () => {
    modalPop.style.opacity = 0;
    const show = setInterval(() => {
      if (modalPop.style.opacity < 1) {
        modalPop.style.opacity =
          Math.round((+modalPop.style.opacity + 0.01) * 100) / 100;
      }
      if (modalPop.style.opacity >= 1) {
        modalPop.style.opacity = 1;
        clearInterval(show);
      }
    }, 5);
  };

  const hideModal = () => {
    const hide = setInterval(() => {
      if (modalPop.style.opacity > 0) {
        modalPop.style.opacity =
          Math.round((modalPop.style.opacity - 0.01) * 100) / 100;
      }
      if (modalPop.style.opacity <= 0) {
        modalPop.style.opacity = 0;
        clearInterval(hide);
        modalPop.style.display = "none";
      }
    }, 5);
  };

  buttons.forEach((btns) => {
    btns.addEventListener("click", () => {
      modalPop.style.display = "block";
      showModal();
    });
  });

  modalPop.addEventListener("click", (e) => {
    if (
      !e.target.closest(".popup-content") ||
      e.target.classList.contains("popup-close")
    ) {
      hideModal();
    }
  });
};
export default modal;
