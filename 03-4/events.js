import { disableButton } from "./views.js";

export const handleEvents = (main) => {
  document.getElementById("form").addEventListener(
    "submit",
    (ev) => {
      ev.preventDefault();

      disableButton();
      main(parseInt(ev.currentTarget.timeout.value, 10));
    },
    false
  );
};
