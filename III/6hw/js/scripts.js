window.addEventListener("load", function () {
  const formElements = document.querySelectorAll(".check");
  const btnElements = document.querySelector(".btnSend");
  const mainForm = document.querySelector(".form");
  const validationObj = {
    name: {
      pattern: /^.{2,30}$/,
      errorText: "from 2 to 32 simbols",
    },
    phone: {
      pattern: /^\d{7,15}$/,
      errorText: "only numbers, from 7 to 15",
    },
    email: {
      pattern: /^.+@.+\..+$/,
      errorText: "only right email",
    },
  };

  mainForm.addEventListener("submit", function (e) {
    let hasError = false;

    formElements.forEach(function (item) {
      let rule = validationObj[item.dataset.rule];

      if (rule !== undefined && !rule.pattern.test(item.value)) {
        hasError = true;
        item.classList.add("err");
        showError(item, rule.errorText);
        disabledBtn();
      }
    });

    if (hasError) {
      e.preventDefault();
    }
  });

  function disabledBtn() {
    btnElements.disabled = true;
  }

  function enabledBtn(e) {
    btnElements.disabled = false;
    e.target.classList.remove("err");
    showError(e.target, "");
  }

  formElements.forEach((el) => el.addEventListener("focusin", enabledBtn));

  function showError(input, message) {
    const box = input.closest(".form_input_box");
    let msgBox = box.querySelector(".error-message");
    msgBox.innerHTML = message;
  }
});
