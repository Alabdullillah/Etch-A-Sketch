let container = document.getElementsByClassName("container");
let grid = document.createElement("div");
let body = document.getElementsByTagName("body");

//document.body.appendChild(container);
//document.container.appendChild(grid);

addEventListener('DOMContentLoaded', (event) => {
    //container.appendChild(grid);
    createGrid(4);
})

//let size = prompt("gridsize: ");   Get the grid size

function createGrid(size) {
 
    
    for (let i = 0; i < size * size; i++){
        let griditem = document.createElement("div");
        griditem.style.border = "6px solid black";
        griditem.style.background = "blue";
        griditem.addEventListener("mouseover", () => {
            griditem.style.backgroundColor = "black";
        })

        griditem.addEventListener("mouseout", () => {
            griditem.style.backgroundColor = "blue";
        })
        
        container.appendChild(griditem);

    }
}

console.log(container)


