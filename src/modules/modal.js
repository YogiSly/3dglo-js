const modal = () => {
  const modal = document.querySelector(".popup");
  const buttons = document.querySelectorAll(".form-btn");
  const closeBtn = modal.querySelector("button.popup-close");

  modal.style.opacity = 0;

  const showModal = () => {
    modal.style.opacity = 0;
    setInterval(() => {
      if (modal.style.opacity < 1) {
        modal.style.opacity =
          Math.round((+modal.style.opacity + 0.1) * 10) / 10;
      } else {
        clearInterval(showModal);
      }
    }, 200);
  };

  const hideModal = () => {
    setInterval(function hider() {
      if (modal.style.opacity > 0) {
        modal.style.opacity = Math.round((modal.style.opacity - 0.1) * 10) / 10;
      } else {
        clearInterval(hider);
      }
    }, 200);
  };

  buttons.forEach((btns) => {
    btns.addEventListener("click", () => {
      modal.style.display = "block";
      showModal();
    });
  });

  closeBtn.addEventListener("click", () => {
    hideModal();
    setTimeout((modal.style.display = "none"), 2000);
  });
};
export default modal;
