const currentUTCDate = new Date();

const hours = currentUTCDate.getUTCHours().toString().padStart(2, "0");
const minutes = currentUTCDate.getUTCMinutes().toString().padStart(2, "0");
const seconds = currentUTCDate.getUTCSeconds().toString().padStart(2, "0");

const currentUTCTime = `${hours}:${minutes}:${seconds}`;

const timeEl = document.getElementById("time");
const dayEl = document.getElementById("day");

timeEl.textContent = currentUTCTime;
dayEl.textContent = currentDay;
