const grid = document.querySelector('#grid');

const sizeArray = [8,16,32,64,128]
const sizeArray2 = [64,32,16,8,4]

loadGrid(0);

let defautColor = '#000000';
let eraserC = '#FFFFFF'
let color = defautColor;

const brush = document.querySelector('#brush');
const eraser = document.querySelector('#eraser');
const fill = document.querySelector('#fill');
const clean = document.querySelector('#clean');
const colorSelection = document.querySelector('#colorSelection');
const sizeSelection = document.querySelector('#sizeSelection');


brush.onclick = () => color = colorSelection.input;
eraser.onclick = () => color = eraserC;
fill.onclick = () => fillGrid();
clean.onclick = () => cleanGrid();
colorSelection.oninput = (e) => changeColor(e.target.value);
sizeSelection.oninput = (e) => changeSize(e.target.value)
function changeColor(value){
    color = value;
}
function delGrid(){
    document.querySelectorAll('#content').forEach(function(e){
        e.parentNode.removeChild(e);
    });

}
function changeSize(value){
    delGrid();
    loadGrid(value);
}

function loadGrid(value){
    for (let i = 0; i < sizeArray[value]**2; i++) {
        const grid_content = document.createElement('div');

        grid_content.classList.add('content');
        grid_content.setAttribute('id', 'content')

        grid_content.style.width = `${sizeArray2[value]}px`;
        grid_content.style.height = `${sizeArray2[value]}px`;

        grid_content.onmouseover = () => {
            if (keyTracker === true) {
                grid_content.style.backgroundColor = color;
            }
        }
        grid.append(grid_content);
    }
}


let keyTracker = false;
document.onmousedown = () => keyTracker = true;
document.onmouseup = () => keyTracker = false;


function cleanGrid() {
    document.querySelectorAll('#content').forEach(function(e){
        e.style.background = eraserC;
    })
}
function fillGrid() {
    document.querySelectorAll('#content').forEach(function(e){
        e.style.background = color;
    })
}
