const container = document.querySelector(".container");
const button = document.querySelector("button");

createDiv(16);

button.addEventListener("click", () => {
    let divCount;
    let cond = true;
    while(cond) {
        divCount = prompt("How many square?", "16");
        if (divCount > 100) {
            alert("Can\'t create more than 100 x 100 divs!");
        } else {
            cond = false;
        }
    }
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
        element.target.style.backgroundColor = randomColor();
    }
});

function randomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return "rgb(" + r +", " + g + ", " + b + ")"
}