export const showData = () => {
  document.getElementById("result").innerHTML =
    "Succeeded!";
  enableButton();
};

export const showError = () => {
  document.getElementById("result").innerHTML = "Failed!";
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
