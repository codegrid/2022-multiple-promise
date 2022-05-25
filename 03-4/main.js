import { handleEvents } from "./events.js";
import { showData, showError } from "./views.js";

const fetchExtremelyHeavyData = (time) =>
  new Promise((resolve) => setTimeout(() => resolve("すごく大きいデータ"), time));

const main = async (time) => {
  const timeout = new Promise((_, reject) =>
    setTimeout(() => reject(new Error("タイムアウト")), 5000)
  );

  try {
    const data = await Promise.race([
      fetchExtremelyHeavyData(time),
      timeout,
    ]);
    showData(data);
  } catch (error) {
    showError(error);
  }
};

handleEvents(main);
