import { showList } from "./views.js";

export const handleEvents = (main, defaultList) => {
  document.getElementById("form").addEventListener(
    "submit",
    (ev) => {
      ev.preventDefault();
      const list = ev.currentTarget.list.value.split(", ");

      main(list);
      showList(list);

      ev.currentTarget.name.value = "";
    },
    false
  );

  document.addEventListener("DOMContentLoaded", () => {
    showList(defaultList);
  });
};
