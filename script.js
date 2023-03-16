gridGenerator = () => {
  let boxNo = prompt("How many boxes : ");

  let boxWidth = 960 / boxNo;
  let boxHeight = 960 / boxNo;
  let totalBox = boxNo * boxNo;

  for (let i = 0; i < totalBox; i++) {
    let singleGrid = document.createElement("div");
    singleGrid.classList = "box";
    singleGrid.style.width = boxWidth + "px";
    singleGrid.style.height = boxHeight + "px";

    document.getElementById("container").appendChild(singleGrid);
  }
  draw();
};

draw = () => {
  let allBox = document.getElementsByClassName("box");
  for (let a = 0; a < allBox.length; a++) {
    allBox[a].addEventListener(
      "click",
      (changeBoxColor = () => {
        allBox[a].style.background = "black";
      })
    );
  }
};

main = () => {
  let generateCanvas = document.getElementById("generateCanvas");
  generateCanvas.addEventListener("click", gridGenerator);
};

main();
