export const showData = (persons) => {
  const html = persons
    .map((person) => {
      if (person.status === "rejected") {
        return `<li>${person.reason}</li>`;
      }

      const { name, age, title } = person.value;
      return `
        <li>
          <span>${name}</span>
          <ul>
            <li>age: ${age}</li>
            <li>title: ${title}</li>
          </ul
        </li>
      `;
    })
    .join("");
  document.getElementById("result").innerHTML = `<ul>${html}</ul>`;
};

export const showError = (error) => {
  document.getElementById("result").innerHTML = error.message;
};

export const showList = (list) => {
  document.getElementById("list").innerHTML = list.join(", ");
};
