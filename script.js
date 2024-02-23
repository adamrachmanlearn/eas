const container = document.querySelector(".container");

for (let i = 256; i > 0; i--) {
    const newDiv = document.createElement("div");
    container.appendChild(newDiv);
};

container.addEventListener("mouseover", element => {
    if (element.target.tagName === "DIV") {
        element.target.style.backgroundColor = "black";
    }
});