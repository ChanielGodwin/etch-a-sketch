const containerSize = 960;
let gridBoxWidthNdHeight = 60;
let rowSize = 16;
let columnSize = rowSize;
  let gridColumnOpacity = 0.1;
let mainContainer = document.querySelector("#container");
let pageBody = document.querySelector("body");
const sketchPromptButton = document.createElement("button");

mainContainer.addEventListener("mouseout", bgChange);
sketchPromptButton.setAttribute("id", "prompt-button");
sketchPromptButton.textContent = "Set boxes size";
pageBody.insertAdjacentElement('afterbegin', sketchPromptButton);



SketchMapper();
sketchPromptButton.addEventListener("click", promptSketchSize);

mainContainer.style.width = containerSize;
mainContainer.style.height = containerSize;






function promptSketchSize() {
  let userDefinedSketchSize = prompt("Enter sizes of box (1-100): ");
  if(userDefinedSketchSize >= 1 && userDefinedSketchSize <= 100) {
    rowSize = userDefinedSketchSize;
    columnSize = userDefinedSketchSize;

    gridBoxWidthNdHeight = containerSize / rowSize;
    SketchMapper();
    console.log(rowSize);
  }
  else {
    rowSize = rowSize;
  }
}

function SketchMapper() {
  mainContainer.replaceChildren(); 

   // gridRow.style.width = containerSize;
    //gridRow.style.height = gridBoxWidthNdHeight;
   // gridColumn.style.width = gridBoxWidthNdHeight;
    //gridColumn.style.height = gridBoxWidthNdHeight;

  for(let i = 0; i < rowSize; i++) {
    let gridRow = document.createElement("div");
    gridRow.classList.toggle("grid-rows");
    gridRow.style.width = `${containerSize}px`;
    gridRow.style.height = `${gridBoxWidthNdHeight}px`;
    for(let j = 0; j < columnSize; j++) {
        let gridColumn = document.createElement("divs");
        gridColumn.classList.toggle("grid-columns");
        gridColumn.style.width = `${gridBoxWidthNdHeight}px`;
        gridColumn.style.height = `${gridBoxWidthNdHeight}px`;
          
        gridRow.appendChild(gridColumn);
    }
    

    mainContainer.appendChild(gridRow);
  }

}

function random(number) {
  return Math.floor(Math.random() * (number + 1));
}

function bgChange(e) {
let opacity = Number(e.target.style.opacity);
  const rndCol = `rgb(${random(255)} ${random(255)} ${random(255)})`;
  e.target.style.backgroundColor = rndCol;


if (opacity >= 0.1 && opacity <= 0.9) {
    e.target.style.opacity = opacity + 0.1;
}
else if(opacity == 1) {
  e.target.style.opacity = opacity;
}else {
    e.target.style.opacity = gridColumnOpacity;
}


  // e.stopPropagation();
}
