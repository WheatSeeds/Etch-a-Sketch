const grid = document.querySelector('#grid');

const sizeGrid = [8,16,32,64,128]
const sizeGridElem = [64,32,16,8,4]

let defautColor = '#6154d6';
let eraserC = '#FFFFFF'
let color = defautColor;
let size = 3;

const brush = document.querySelector('#brush');
const eraser = document.querySelector('#eraser');
const fill = document.querySelector('#fill');
const clean = document.querySelector('#clean');
const colorSelection = document.querySelector('#colorSelection');
const sizeSelection = document.querySelector('#sizeSelection');
const sizeValue = document.querySelector('#sizeValue');

brush.onclick = () => color = defautColor;
eraser.onclick = () => color = eraserC;
fill.onclick = () => fillGrid();
clean.onclick = () => cleanGrid();
colorSelection.oninput = (e) => changeColor(e.target.value);
sizeSelection.onmousemove = (e) => updateSizeValue(e.target.value)
sizeSelection.oninput = (e) => changeSize(e.target.value);

function updateSizeValue(value) {
    sizeValue.innerHTML = `${sizeGrid[value]} - ${sizeGrid[value]}`
}

function fillGrid() {
    document.querySelectorAll('#content').forEach(function(e){
        e.style.background = color;
    })
}

function cleanGrid(){
    document.querySelectorAll('#content').forEach(function(e){
        e.parentNode.removeChild(e);
    });
    loadGrid(size)
}

function changeColor(value){
    color = value;
    defautColor = value;
}

function changeSize(value){
    size = value;
    cleanGrid();
}

let keyTracker = false;
document.onmousedown = () => keyTracker = true;
document.onmouseup = () => keyTracker = false;

function loadGrid(value){
    for (let i = 0; i < sizeGrid[value]**2; i++) {
        const grid_content = document.createElement('div');

        grid_content.classList.add('content');
        grid_content.setAttribute('id', 'content')

        grid_content.style.width = `${sizeGridElem[value]}px`;
        grid_content.style.height = `${sizeGridElem[value]}px`;

        grid_content.onmouseover = () => {
            if (keyTracker === true) {
                grid_content.style.backgroundColor = color;
            }
            else{
                grid_content.onclick = () => grid_content.style.backgroundColor = color;
            }
        }
        grid.append(grid_content);
    }
}

loadGrid(3);