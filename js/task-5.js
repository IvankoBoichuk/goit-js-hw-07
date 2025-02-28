function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const initBgChanger = () => {
  const btn = document.querySelector(".change-color");
  btn.addEventListener("click", bgChanger);
}

const bgChanger = () => {
  const htmlBody = document.querySelector("body");
  const htmlColor = document.querySelector(".color");
  const color = getRandomHexColor();

  htmlBody.style = `background-color: ${color}`
  htmlColor.innerText = color;
}

document.addEventListener("DOMContentLoaded", initBgChanger);
