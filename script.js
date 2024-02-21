const container = document.querySelector(".container");

for (let i = 256; i > 0; i--) {
    const newDiv = document.createElement("div");
    container.appendChild(newDiv);
}