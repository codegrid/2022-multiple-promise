import { showList } from "./views.js";

export const handleEvents = (main, list) => {
  document.getElementById("form").addEventListener(
    "submit",
    (ev) => {
      ev.preventDefault();
      const _list =
        ev.currentTarget.name.value !== ""
          ? [...list, ev.currentTarget.name.value]
          : list;

      main(_list);
      showList(_list);

      ev.currentTarget.name.value = "";
    },
    false
  );

  document.addEventListener("DOMContentLoaded", () => {
    showList(list);
  });
};
