const grid = document.querySelector('#grid');
let keyTracker = false;
document.onmousedown = () => keyTracker = true;
document.onmouseup = () => keyTracker = false;

for(let i = 0; i < 256; i++){
    const grid_content = document.createElement('div');
    grid_content.classList.add('content');
    grid_content.onmouseover = () => {
        if (keyTracker === true) {
            grid_content.classList.add('contentActive');
        }
    }
    grid.appendChild(grid_content);
}