const textElement = document.getElementById("text");
const texts = ["Hi i'm Esaias", "Hi i'm Dakseid"];
let index = 0;

setInterval(() => {
    index = (index + 1) % texts.length;
    textElement.textContent = texts[index];
}, 4000);