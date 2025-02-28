function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const init = () => {
  const btnCreate = document.querySelector("[data-create]");
  const btnDestroy = document.querySelector("[data-destroy]");
  btnCreate.addEventListener("click", createHandler);
  btnDestroy.addEventListener("click", destroyHandler);
}

const createHandler = (e) => {
  const htmlInput = document.querySelector("#controls input");

  if (+htmlInput.value >= +htmlInput.min && +htmlInput.value <= +htmlInput.max) {
    createBoxes(+htmlInput.value)
  }
}

const destroyHandler = (e) => {
  const htmlBoxex = document.getElementById("boxes");
  htmlBoxex.innerHTML = "";
}

const createBoxes = (amount) => {
  const htmlBoxex = document.getElementById("boxes");
  htmlBoxex.innerHTML = "";
  for (let index = 0; index < amount; index++) {
    const htmlBox = document.createElement("div");
    htmlBox.style = `
      width: ${30 + index * 10}px;
      height: ${30 + index * 10}px;
      background-color: ${getRandomHexColor()};
    `
    htmlBoxex.append(htmlBox)
  }
}

document.addEventListener("DOMContentLoaded", init);