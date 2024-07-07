let container = document.getElementsByClassName("container")[0];
let grid = document.createElement("div");
let body = document.getElementsByTagName("body");
let button = document.getElementById("btn");
let eraser = document.getElementById("eraser")
let size = document.getElementById("size");


//document.body.appendChild(container);
//document.container.appendChild(grid);



function createGrid(size) {
 
    for (let i = 0; i < size * size; i++){
        let griditem = document.createElement("div");
       // griditem.style.border = "0.1px solid black";
        griditem.style.background = "white";
        griditem.setAttribute("class", "cells");
        griditem.style.width = `${600/size}px`;
        griditem.style.height = `${600/size}px`;
        
        container.appendChild(griditem);
        
        griditem.addEventListener("mouseover", () => {
            griditem.style.backgroundColor = "black";
        })

        griditem.addEventListener("mouseout", () => {
            griditem.style.backgroundColor = "green";
        })
        
    }
}

button.addEventListener("click", (event) => {
    //container.appendChild(grid);
    while (container.firstChild) {
        container.removeChild(container.firstChild)
    }
    createGrid(16);
})

eraser.addEventListener("click", (event) => {
    while (container.firstChild) {
        container.removeChild(container.firstChild)
    }   
})
//    griditem.addEventListener("mouseout", () => {
//        griditem.style.backgroundColor = "white";
//})

