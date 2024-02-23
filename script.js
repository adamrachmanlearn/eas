const container = document.querySelector(".container");
const button = document.querySelector("button");

createDiv(16);

button.addEventListener("click", () => {
    const divCount = prompt("How many square?", "16");
    removeDiv(container);
    createDiv(divCount);
});

function removeDiv(parent) {
    while(parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function createDiv(num) {
    for (let i = num * num; i > 0; i--) {
        const newDiv = document.createElement("div");
        container.appendChild(newDiv);
    }
}

container.addEventListener("mouseover", element => {
    if (element.target.className !== "container") {
        element.target.style.backgroundColor = "black";
    }
});