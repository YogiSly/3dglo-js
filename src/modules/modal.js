const modal = () => {
  const modal = document.querySelector(".popup");
  const buttons = document.querySelectorAll(".form-btn");
  const closeBtn = modal.querySelector(".popup-close");
  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      modal.style.display = "block";
    });
  });
  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });
};
export default modal;
