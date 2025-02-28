const initGallery = () => {
    const images = [
        {
            url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
            alt: "White and Black Long Fur Cat",
        },
        {
            url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
            alt: "Orange and White Koi Fish Near Yellow Koi Fish",
        },
        {
            url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
            alt: "Group of Horses Running",
        },
    ];

    const htmlGallery = document.querySelector(".gallery");
    const createImage = (el) => {
        const htmlLi = document.createElement("li");
        const htmlImg = document.createElement("img");
        htmlImg.src = el.url
        htmlImg.alt = el.alt
        htmlImg.width = 300
        htmlImg.height = 300
        htmlLi.append(htmlImg)
        return htmlLi;
    }
    htmlGallery.append(...images.map(createImage))
}

document.addEventListener("DOMContentLoaded", initGallery);