const init = () => {
    const htmlCategories = document.querySelectorAll("li.item");
    printMessage(`Number of categories: ${htmlCategories.length}`);

    htmlCategories.forEach(categoryParser)
}
const printMessage = (text) => {
    console.log(text);
}
const categoryParser = (el) => {
    const title = el.querySelector("h2").innerText;
    const subCatsCount = el.querySelector("ul").children.length;

    printMessage(`Category: ${title}`)
    printMessage(`Elements: ${subCatsCount}`)
}

document.addEventListener("DOMContentLoaded", init);