const container = document.querySelector(".container");

for (let i = 0; i < 16*16; i++) {
    let div = document.createElement("div");
    div.setAttribute("id", "square");
    container.appendChild(div);
}

const squares = document.querySelectorAll("#square");

squares.forEach(square => {
    square.addEventListener("mouseover", (e) => {
        let style = window.getComputedStyle(square);

        if (style.backgroundColor === "rgb(128, 128, 128)") {
            square.style.backgroundColor = "red";
        }

        square.style.backgroundColor = "red";

        if (e.buttons == 1 || e.buttons == 3) {
            square.style.backgroundColor = "grey";
            square.setAttribute("class", "activated");
        }
    })
    
    square.addEventListener("mousedown", () => {
        square.style.backgroundColor = "grey";
        square.setAttribute("class", "activated");
    })

    square.addEventListener("mouseleave", () => {
        let style = window.getComputedStyle(square);
        console.log(style.backgroundColor);

        if (style.backgroundColor === "rgb(255, 0, 0)" && square.getAttribute("class") === "activated") {
            console.log("works");
            square.style.backgroundColor = "grey";
        }

        else if (style.backgroundColor === "rgb(255, 0, 0)") {
            square.style.backgroundColor = "white";
        }
    })
})

const button = document.querySelector(".resetbtn");

button.addEventListener("click", () => {
    squares.forEach(square => {
        square.style.backgroundColor = "white";
        square.removeAttribute("class", "activated");
    })
})