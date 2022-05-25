export const showData = (data) => {
  document.getElementById("result").innerHTML =
    `Succeeded!: ${data}`;
  enableButton();
};

export const showError = (error) => {
  document.getElementById("result").innerHTML = `Failed!: ${error.message}`;
  enableButton();
};

export const disableButton = () => {
  document
    .getElementById("button")
    .setAttribute("disabled", true);
};

export const enableButton = () => {
  document
    .getElementById("button")
    .removeAttribute("disabled");
};
