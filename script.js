const container = document.querySelector(".container");
const button = document.querySelector("button");

button.addEventListener("click", () => {
    const divCount = prompt("How many square?", "16");
    removeDiv(container);
});

function removeDiv(parent) {
    while(parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

for (let i = 256; i > 0; i--) {
    const newDiv = document.createElement("div");
    container.appendChild(newDiv);
};

container.addEventListener("mouseover", element => {
    if (element.target.tagName === "DIV") {
        element.target.style.backgroundColor = "black";
    }
});