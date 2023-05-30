let colorButtons = document.querySelectorAll(".color-button");

function getColor(button) {
    let color = button.getAttribute("id");
    return color;
}

let currentColor = "grey";
let rainbowSelected = false;

colorButtons.forEach(button => {
    button.addEventListener("click", () => {
        currentColor = getColor(button);

        if (button.getAttribute("id") === "rainbow") {
            rainbowSelected = true;
        }
        else {
            rainbowSelected = false;
        }
    })
})

const container = document.querySelector(".container");
let dimensionContainer = document.querySelector(".dimension");

let dimension = 0;


dimensionContainer.addEventListener("input", () => {
    dimension = dimensionContainer.value;

    while (container.lastElementChild) {
        container.removeChild(container.lastElementChild);
    }
    
    if (dimension <= 100 && dimension > 0) {
        for (let i = 0; i < dimension * dimension; i++) {
            let div = document.createElement("div");
            div.setAttribute("id", "square");
            container.appendChild(div);
        }
    }

    let pixels_per_square = 451_584 / (dimension * dimension);
    let square_side = Math.sqrt(pixels_per_square);

    if (!Number.isInteger(square_side)) {
        square_side = Math.round(square_side);
    }

    //Then recalculate dimensions of container
    if (dimension <= 100 && dimension > 0) {
        container.style.height = `${dimension * square_side}px`;
        container.style.width = `${dimension * square_side}px`;
    }

    const squares = document.querySelectorAll("#square");

    squares.forEach(square => {
        square.style.width = `${square_side - 2}px`;
        square.style.height = `${square_side - 2}px`;

        square.addEventListener("mouseover", (e) => {
            let style = window.getComputedStyle(square);

            if (rainbowSelected === true) {
                let random = Math.floor(Math.random() * (7 - 1 + 1)) + 1;
                if (random === 1) {
                    currentColor = "red";
                }
                else if (random === 2) {
                    currentColor = "orange";
                }
                else if (random === 3) {
                    currentColor = "yellow";
                }
                else if (random === 4) {
                    currentColor = "green";
                }
                else if (random === 5) {
                    currentColor = "blue";
                }
                else if (random === 6) {
                    currentColor = "indigo";
                }
                else if (random === 7) {
                    currentColor = "violet";
                }
            }

            if (style.backgroundColor === "rgba(0, 0, 0, 0)" || style.backgroundColor === "rgb(255, 255, 255)" && square.getAttribute("class") !== "activated") {
                square.style.backgroundColor = "red";
            }

            if (e.buttons == 1 || e.buttons == 3) {
                square.style.backgroundColor = currentColor;
                square.setAttribute("class", "activated");
            }
        })
        
        square.addEventListener("mousedown", () => {
            if (rainbowSelected === true) {
                let random = Math.floor(Math.random() * (7 - 1 + 1)) + 1;
                if (random === 1) {
                    currentColor = "red";
                }
                else if (random === 2) {
                    currentColor = "orange";
                }
                else if (random === 3) {
                    currentColor = "yellow";
                }
                else if (random === 4) {
                    currentColor = "green";
                }
                else if (random === 5) {
                    currentColor = "blue";
                }
                else if (random === 6) {
                    currentColor = "indigo";
                }
                else if (random === 7) {
                    currentColor = "violet";
                }
            }
            square.style.backgroundColor = currentColor;
            square.setAttribute("class", "activated");
        })

        square.addEventListener("mouseleave", () => {
            let style = window.getComputedStyle(square);

            //if (style.backgroundColor === "rgb(255, 0, 0)" && square.getAttribute("class") === "activated") {
                //square.style.backgroundColor = currentColor;
                //square.removeAttribute("class", "activated");
            //}

            if (style.backgroundColor === "rgb(255, 0, 0)" && square.getAttribute("class") !== "activated") {
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
})
