const grid = document.querySelector('#grid');

let defautColor = '#000000';
let eraserC = '#FFFFFF'
let color = defautColor;

const brush = document.querySelector('#brush');
const eraser = document.querySelector('#eraser');
const fill = document.querySelector('#fill');
const clean = document.querySelector('#clean');

brush.onclick = () => color = defautColor;
eraser.onclick = () => color = eraserC;
fill.onclick = () => fillGrid();
clean.onclick = () => clearGrid();


let keyTracker = false;
document.onmousedown = () => keyTracker = true;
document.onmouseup = () => keyTracker = false;
for (let i = 0; i < 256; i++) {
    const grid_content = document.createElement('div');
    grid_content.classList.add('content');
    grid_content.setAttribute('id','content')
    grid_content.onmouseover = () => {
        if (keyTracker === true) {
            grid_content.style.backgroundColor = color;
        }
    }
    grid.append(grid_content);
}

function clearGrid() {
    document.querySelectorAll('#content').forEach(function(e){
        e.style.background = eraserC;
    })
}
function fillGrid() {
    document.querySelectorAll('#content').forEach(function(e){
        e.style.background = defautColor;
    })
}
