const regular = () => {
  const inputCalc = document.querySelectorAll(".calc-item");
  const typeText = document.querySelectorAll(
    "input[type='text']:not(.calc-item)"
  );
  const plHld = document.querySelectorAll(
    "input[placeholder='Ваше сообщение']"
  );
  const email = document.querySelectorAll("input[type='email']");
  const tel = document.querySelectorAll("input[type='tel']");

  inputCalc.forEach((input) => {
    input.addEventListener("input", () => {
      input.value = input.value.replace(/[^\d\.]+/gi, "");
    });
  });

  // typeText.forEach((element) => {
  //   element.addEventListener("input", () => {
  //     element.value = element.value.replace(/[^а-яА-Я\- ]+/gi, "");
  //   });
  // });
  // plHld.forEach((element) => {
  //   element.addEventListener("input", () => {
  //     element.value = element.value.replace(/[^а-яА-Я\- ]+/gi, "");
  //   });
  // });
  // email.forEach((element) => {
  //   element.addEventListener("input", () => {
  //     element.value = element.value.replace(/[^a-zA-Z\@\-\_\.\!\~\*]+/gi, "");
  //   });
  // });
  // tel.forEach((input) => {
  //   input.addEventListener("input", () => {
  //     input.value = input.value.replace(/[^\d\(\)\-]+/gi, "");
  //   });
  // });
};
export default regular;
