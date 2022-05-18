import { handleEvents } from "./events.js";
import { showData, showError } from "./views.js";

const fetchPerson = (name) => {
  const data = {
    alice: {
      age: 25,
      title: "engineer",
    },
    bob: {
      age: 30,
      title: "designer",
    },
    charlie: {
      age: 28,
      title: "director",
    },
  };

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!data[name])
        return reject(
          new Error(`${name}のデータは存在しません`)
        );

      resolve({
        name,
        ...data[name],
      });
    }, 100);
  });
};

const list = ["alice", "bob", "charlie", "david"];
const main = async (list) => {
  try {
    const data = await Promise.allSettled(
      list.map((slug) => fetchPerson(slug))
    );
    showData(data);
  } catch (error) {
    showError(error);
  }
};

handleEvents(main, list);
