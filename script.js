var containerDiv = document.querySelector('.container');
function createGridNew(n) {
    n=Number(prompt("Enter x for x by x grid"));
    containerDiv.innerHTML='';
    var subDiv = document.createElement('div');
    subDiv.className = "grid-container";
    subDiv.style.display = "grid";
    subDiv.style["grid-template-columns"] = "repeat(16,1fr)";
    for (let i = 1; i <= n * n; i++) {
        let gridBox = document.createElement('div');
        gridBox.className = 'grid-item' + i;
        gridBox.style.alignItems = "center";
        gridBox.style.textAlign = "center";
        gridBox.innerText = "";
        gridBox.style.backgroundColor = "white";
        gridBox.innerText = i;
        gridBox.style.color = gridBox.style.backgroundColor;
        gridBox.style.fontSize = "30px";
        // gridBox.addEventListener("mouseover",idkwhatishappening(gridBox));
        // gridBox.addEventListener("mouseout",changeColorBack(gridBox));
        gridBox.style.border = "2px solid black";
        gridBox.setAttribute("onmouseover", "TrailStart(this)");
        gridBox.setAttribute("onmouseout", "TrailEnd(this)");
        subDiv.appendChild(gridBox);
    }
    containerDiv.appendChild(subDiv);
}

function TrailStart(gB) {
    console.log(gB.id);
    gB.style.backgroundColor = "black";
    gB.style.color = gB.style.backgroundColor;
}

function TrailEnd(gB) {
    gB.style.backgroundColor = "white";
    gB.style.color = gB.style.backgroundColor;
}

const newButton = document.getElementsByTagName("button");
newButton[0].addEventListener('click',createGridNew);