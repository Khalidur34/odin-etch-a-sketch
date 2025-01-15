const gridContainer = document.querySelector(".grid");
let gridButton = document.querySelector(".gridButton");
let boxes = document.querySelectorAll(".box");
let defaultBox = 16;

gridButton.onclick = function() {
    let currBox = prompt("Enter number of boxes per side");
    if(currBox >= 100) {
        currBox = 100;
    }
    clearGrid();
    defaultBox = currBox;
    createGrid(defaultBox);
}

createGrid(defaultBox);

function createGrid(boxNum) {
    for(i = 0; i < boxNum*boxNum; i++) {
        let tempBox = createBox();
        gridContainer.appendChild(tempBox);
    }
}

function clearGrid() {
    while(gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild);
    }
}

function createBox() {
    let size = 500/defaultBox;
    let box = document.createElement("div");
    box.style.height = size + 'px';
    box.style.width = size + 'px';
    box.classList.add("box");
    box.onmouseover = function() {
        this.style.backgroundColor = 'red';
    }
    return box;
}



