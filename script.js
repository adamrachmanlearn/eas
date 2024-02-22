const container = document.querySelector(".container");

for (let i = 256; i > 0; i--) {
    const newDiv = document.createElement("div");
    container.appendChild(newDiv);
}

const divs = document.querySelectorAll(".container div");
divs.forEach((div) => {
    div.addEventListener("mouseover", (elem) => {
        elem.target.style.backgroundColor = "black";
    })
})