// generate draw space
drawingSpace = (boxSize) => {
  let boxWidth = 960 / boxSize;
  let boxHeight = 960 / boxSize;
  let totalBox = boxSize * boxSize;

  for (let i = 0; i < totalBox; i++) {
    let singleGrid = document.createElement("div");
    singleGrid.classList = "box";
    singleGrid.style.width = boxWidth + "px";
    singleGrid.style.height = boxHeight + "px";

    document.getElementById("container").appendChild(singleGrid);
  }
};

// change color when mouse over boxes
draw = (color) => {
  let container = document.getElementById("container");
  container.addEventListener("mouseover", (e) => {
    e.target.style.background = color;
  });
};

// input box size
createDrawingSpace = () => {
  let container = document.getElementById("container");
  if (container.hasChildNodes()) {
    let boxNo = prompt("Enter desired box size : ");
    while (container.hasChildNodes()) {
      container.removeChild(container.firstChild);
    }
    drawingSpace(boxNo);
  }
};

rainbowColor = () => {
  draw("blue");
};

drawingSpace(16);
let generateCanvas = document.getElementById("generateCanvas");
generateCanvas.addEventListener("click", createDrawingSpace);

let rainbowBtn = document.getElementById("rainbow");
rainbowBtn.addEventListener("click", rainbowColor);

draw("black");
