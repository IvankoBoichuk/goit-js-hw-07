const initHello = () => {
    const htmlInput = document.getElementById("name-input");
    htmlInput.addEventListener("input", inputHandler)
}

const inputHandler = (e) => {
    const htmlOutput = document.getElementById("name-output");
    htmlOutput.innerHTML = e.target.value || "Anonymous"
}

document.addEventListener("DOMContentLoaded", initHello);