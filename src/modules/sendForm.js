const sendForm = ({ formId, someElem = [] }) => {
  const form = document.getElementById(formId);
  const statusBlock = document.createElement("div");
  const errorText = "Ошибка...";
  const successText = "Спасибо! Наш менеджер с вами свяжется";
  let boolName = false;
  let boolPhone = false;
  let boolEmail = false;
  let boolMessage = false;

  form.noValidate = true;
  const validate = function (list) {
    let success = false;
    boolName = false;
    boolPhone = false;
    boolEmail = false;
    boolMessage = false;
    list.forEach((elem) => {
      if (elem.attributes.name.value === "user_name") {
        if (/^[а-яА-Я]{2,}$/gi.test(elem.value)) {
          boolName = true;
        } else {
          elem.setCustomValidity("Заполните не менее 2-х руских символов");
          elem.reportValidity();
        }
      }
      if (elem.attributes.name.value === "user_email") {
        if (/^[\da-zA-Z\-@\.]{5,}$/gi.test(elem.value)) {
          boolEmail = true;
        } else {
          elem.setCustomValidity("Заполните правильно e-mail");
          elem.reportValidity();
        }
      }
      if (elem.attributes.name.value === "user_phone") {
        if (/^[\d\-\+\(\)]{11,}$/gi.test(elem.value)) {
          boolPhone = true;
        } else {
          elem.setCustomValidity("Заполните не менее 11 цифр");
          elem.reportValidity();
        }
      }
      if (elem.attributes.name.value === "user_message") {
        if (/^[\dа-яА-Я\-\(\)\,\.\!\?\:\;]*$/gi.test(elem.value)) {
          boolMessage = true;
        } else {
          elem.setCustomValidity("Заполните сообщение русскими буквами");
          elem.reportValidity();
        }
      }
    });
    if (
      formId === "form2" &&
      boolName === true &&
      boolPhone === true &&
      boolEmail === true &&
      boolMessage === true
    ) {
      success = true;
    } else if (
      formId != "form2" &&
      boolName === true &&
      boolEmail === true &&
      boolPhone === true
    ) {
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

    statusBlock.innerHTML = "<img src='./src/images/load.png'>";
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
          setTimeout(() => {
            statusBlock.textContent = "";
          }, 5000);
          formElements.forEach((input) => {
            input.value = "";
          });
        })
        .catch((error) => {
          statusBlock.textContent = errorText;
        });
    } else {
      statusBlock.textContent = "";
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
