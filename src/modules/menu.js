const menu = () => {
  const menuMain = document.querySelector("menu");

  const handleMenu = () => {
    menuMain.classList.toggle("active-menu");
  };
  document.addEventListener("click", (e) => {
    if (e.target.closest(".menu")) {
      handleMenu();
    }
  });

  menuMain.addEventListener("click", (e) => {
    if (
      e.target.closest("menu>ul>li>a") ||
      e.target.classList.contains("close-btn")
    ) {
      handleMenu();
    }
  });
};
export default menu;
