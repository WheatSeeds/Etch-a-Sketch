const grid = document.querySelector('#grid');

const sizeArray = [8,16,32,64,128]

let defautColor = '#000000';
let eraserC = '#FFFFFF'
let color = defautColor;

const brush = document.querySelector('#brush');
const eraser = document.querySelector('#eraser');
const fill = document.querySelector('#fill');
const clean = document.querySelector('#clean');
const colorSelection = document.querySelector('#colorSelection');


brush.onclick = () => color = defautColor;
eraser.onclick = () => color = eraserC;
fill.onclick = () => fillGrid();
clean.onclick = () => clearGrid();
colorSelection.oninput = (e) => changeColor(e.target.value);

function changeColor(value){
    color = value;
}

let keyTracker = false;
document.onmousedown = () => keyTracker = true;
document.onmouseup = () => keyTracker = false;


function clearGrid() {
    document.querySelectorAll('#content').forEach(function(e){
        e.style.background = eraserC;
    })
}
function fillGrid() {
    document.querySelectorAll('#content').forEach(function(e){
        e.style.background = color;
    })
}

for (let i = 0; i < 256; i++) {
    const grid_content = document.createElement('div');
    grid_content.classList.add('content');
    grid_content.setAttribute('id', 'content')
    grid_content.style.width = `32px`;
    grid_content.style.height = `32px`;
    grid_content.onmouseover = () => {
        if (keyTracker === true) {
            grid_content.style.backgroundColor = color;
        }
    }
    grid.append(grid_content);
}