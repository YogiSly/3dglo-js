const sendForm = ({ formId, someElem = [] }) => {
  const form = document.getElementById(formId);
  const statusBlock = document.createElement("div");
  const loadText = "Загрузка...";
  const errorText = "Ошибка...";
  const successText = "Спасибо! Наш менеджер с вами свяжется";

  const validate = function (list) {
    let success = false;
    let boolName = false;
    let boolPhone = false;
    let boolMessage = false;
    console.log(list);
    list.forEach((elem) => {
      if (elem.attributes.name.value === "user_name") {
        if (/^[а-яА-Я]*$/gi.test(elem.value)) {
          boolName = true;
        }
      }
      if (elem.attributes.name.value === "user_phone") {
        if (/^[\d\-\+\(\)]*$/gi.test(elem.value)) {
          boolPhone = true;
        }
      }
      if (elem.attributes.name.value === "user_message") {
        if (/^[\dа-яА-Я\-\(\)\,\.\!\?\:\;]*$/gi.test(elem.value)) {
          boolMessage = true;
        }
      }
    });
    console.log(formId);
    if (
      formId === "form2" &&
      boolName === true &&
      boolPhone === true &&
      boolMessage === true
    ) {
      success = true;
    } else if (formId != "form2" && boolName === true && boolPhone === true) {
      success = true;
    }
    return success;
  };

  const sendData = (data) => {
    return fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    }).then((res) => res.json());
  };

  const submitForm = () => {
    const formElements = form.querySelectorAll("input");
    const formData = new FormData(form);
    const formBody = {};

    statusBlock.textContent = loadText;
    form.append(statusBlock);

    formData.forEach((val, key) => {
      formBody[key] = val;
    });

    someElem.forEach((elem) => {
      const element = document.getElementById(elem.id);

      if (elem.type === "block") {
        formBody[elem.id] = element.textContent;
      } else {
        formBody[elem.id] = element.textContent;
      }
    });

    if (validate(formElements)) {
      sendData(formBody)
        .then((data) => {
          statusBlock.textContent = successText;
          formElements.forEach((input) => {
            input.value = "";
          });
        })
        .catch((error) => {
          statusBlock.textContent = errorText;
        });
    } else {
      alert("Данные не валидны");
    }
  };
  try {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      submitForm();
    });
  } catch (error) {
    console.log(error.message);
  }
};
export default sendForm;
