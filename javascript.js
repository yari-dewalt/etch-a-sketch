const container = document.querySelector(".container");

for (let i = 0; i < 16*16; i++) {
    let div = document.createElement("div");
    div.setAttribute("id", "square");
    container.appendChild(div);
}

const squares = document.querySelectorAll("#square");

squares.forEach(square => {
    square.addEventListener("mouseover", () => {
        square.style.backgroundColor = "red";
    })
    square.addEventListener("mouseout", () => {
        square.style.backgroundColor = "white";
    })
    square.addEventListener("mousedown", () => {
        square.style.backgroundColor = "grey";
    })
})