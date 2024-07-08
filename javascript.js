let container = document.getElementsByClassName("container")[0];
let grid = document.createElement("div");
let body = document.getElementsByTagName("body");
let button = document.getElementById("btn");
let eraser = document.getElementById("eraser")
let size = document.querySelector("#size");
let sliderValue = document.querySelector("#sliderValue") 

sliderValue.textContent = `${size.value} * ${size.value}`
//document.body.appendChild(container);
//document.container.appendChild(grid);

function createGrid(size) {
    while (container.firstChild) {
        container.removeChild(container.firstChild)
    }   
 
    for (let i = 0; i < size * size; i++){
        let griditem = document.createElement("div");
        griditem.style.border = "1px solid black";
        griditem.style.background = "white";
        griditem.setAttribute("class", "cells");
        griditem.style.width = `${(600/size) - 2}px`;
        griditem.style.height = `${(600/size) - 2}px`;
        let g = Math.round((Math.random() * 255))
        let b = Math.round((Math.random() * 255))
        let r = Math.round((Math.random() * 255))
        
        container.appendChild(griditem);
        
        griditem.addEventListener("mouseover", () => {
            griditem.style.backgroundColor = "black";
       })

     griditem.addEventListener("mouseout", () => {
       griditem.style.backgroundColor = `rgb(${r},${g},${b})`;
     })
        //rgb (2,2,3)
    }
}

size.addEventListener("input", () => {
    sliderValue.textContent = `${size.value} * ${size.value}`
    createGrid(size.value);
})

button.addEventListener("click", (event) => {
    //container.appendChild(grid);
   // while (container.firstChild) {
   //     container.removeChild(container.firstChild)
// }
//        let cell = Document.getElementsByClassName("cells") ;
//           cell.addEventListener("mouseover", () => {
//            cell.style.backgroundColor = "black";
//        })
//           cell.addEventListener("mouseout", () => {
//            cell.style.backgroundColor = `rgb(${r},${g},${b})`;
//        })
    
})

eraser.addEventListener("click", (event) => {
    while (container.firstChild) {
        container.removeChild(container.firstChild)
    }   
})
//    griditem.addEventListener("mouseout", () => {
//        griditem.style.backgroundColor = "white";
//})

