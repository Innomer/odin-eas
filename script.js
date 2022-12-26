const gridCon = document.querySelector('.grid')
const valSlider = document.querySelector('#myRange');
var sizeViewer = document.querySelector('#sizeViewer');
var mouseDow = false;
var erase = false;
var randomColorEnable = false;
valSlider.setAttribute('onchange', 'clearGrid()');

function createDiv(size) {
    let subDiv = document.createElement('div');
    subDiv.style.width = size;
    subDiv.className = "item";
    subDiv.style.fontSize = '10px';
    subDiv.style.border = "1px solid rgb(156, 156, 156)";
    subDiv.style['backgroundColor'] = 'white';
    subDiv.setAttribute('onclick', 'onMouseOverColorCheck(this)');
    subDiv.setAttribute('onmousedown', 'onMouseOverColorCheck(this)');
    subDiv.setAttribute('onmouseover', 'onMouseOverColorCheck(this)');
    subDiv.setAttribute('onmouseup', 'mouseUp()');
    subDiv.draggable = false;
    return subDiv;
}

function getRandomColor() {
    var randomColor = Math.floor(Math.random() * 16777215).toString(16);
    return randomColor;
}

function randomColorGenerator(but) {
    if(randomColorEnable)
    {
        randomColorEnable=false;
        but.classList.remove('randomButtonToggled');
    }
    else{
        randomColorEnable=true;
        but.classList.add('randomButtonToggled');
    }
}

function onMouseOverColorCheck(subDiv) {
    if (mouseDow) {
        if (!erase) {
            if (!randomColorEnable)
                subDiv.style.backgroundColor = 'black';
            else {
                subDiv.style.backgroundColor='#'+getRandomColor();
            }
        }
        else
            subDiv.style.backgroundColor = 'white';
    }
}

function eraser(eraserButton) {
    if (erase) {
        erase = false;
        eraserButton.classList.remove('eraserButtonToggled');
    }
    else {
        erase = true;
        eraserButton.classList.add('eraserButtonToggled');
    }
}

function mouseDown() {
    mouseDow = true;
}
function mouseUp() {
    mouseDow = false;
}

function clearGrid() {
    gridCon.textContent = '';
    createGrid(valSlider.value);
}

function setSizeViewer(n) {
    sizeViewer.innerText = "Grid Size: " + n;
}
function createGrid(n) {
    setSizeViewer(n);
    gridCon.style["grid-template-columns"] = 'repeat(' + n + ',1fr)';
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            gridCon.appendChild(createDiv(gridCon.clientWidth / n));
        }
    }
}