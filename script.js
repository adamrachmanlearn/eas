const container = document.querySelector(".container");
const button = document.querySelector("button");
let darken = -1;

createDiv(16);

button.addEventListener("click", () => {
    let divCount;
    let cond = true;
    while(cond) {
        divCount = prompt("How many square?", "16");
        if (divCount > 100 || divCount < 1) {
            alert("Only 1 - 100 allowed!");
        } else {
            cond = false;
        }
    }
    removeDiv(container);
    createDiv(divCount);
    darken = -1;
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
        if (darken <= 10) darken += 1;
        element.target.style.backgroundColor = randomColor(darken);
    }
});

function randomColor(darken) {
    let light = 50;
    for (let i = darken; i > 0; i--) {
        light -= 5;
    }
    const hue = Math.floor(Math.random() * 361);
    return "hsl(" + hue + ", 100%, " + light + "%)"
}