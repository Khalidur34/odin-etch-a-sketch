const gridContainer = document.querySelector("#grid-container");



for(i = 0; i < 16 ; i++) {
    for(j = 0; j < 16 ; j++) {
        let tempBox = createBox();
        gridContainer.appendChild(tempBox);
    }
}

function createBox() {
    let box = document.createElement("div");
    box.classList.add("box");
    return box;
}

function changeColor() {
    this.style.backgroundColor = 'red';
}

let boxes = document.querySelectorAll(".box");
boxes.forEach(element => {
    element.onmouseover = function() {
        this.style.backgroundColor = 'red';
    }
});



