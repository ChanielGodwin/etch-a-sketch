const SKETCH_PAD_SIZE = 960;
const MAIN_CONTAINER = document.querySelector("#container");
const SKETCH_PAD_CONTAINER = document.querySelector("body");
const PROMPT_BUTTON = document.createElement("button");
const ERASE_SKETCH_BUTTON = document.createElement("button");

let squaredCellWidth = 60;
let numberOfCellRows = 16;
let numberOfCellColumns = numberOfCellRows;
let sketchPad = document.createElement("div");
let titleNdPromptBar = document.createElement("div");
let sketchPadTitle = document.createElement("div");
let sketchPadNdEraser = document.createElement("div");
let eraserDiv = document.createElement("div");


sketchPadNdEraser.setAttribute("id", "sketchpad-nd-eraser");
titleNdPromptBar.style.width = `${SKETCH_PAD_SIZE + 20}px`; //additional 20 represent the sketch pad additional width as a result of padding 
titleNdPromptBar.setAttribute("id", "title-nd-prompt-bar");
sketchPadTitle.setAttribute("id", "sketchpad-info");

sketchPad.setAttribute("id", "sketch-pad");
sketchPad.style.width = SKETCH_PAD_SIZE;
sketchPad.style.height = SKETCH_PAD_SIZE;

PROMPT_BUTTON.setAttribute("id", "prompt-button");
PROMPT_BUTTON.textContent = "Set boxes size";
PROMPT_BUTTON.addEventListener("click", promptSketchSize);

eraserDiv.setAttribute("id", "eraser-div");
ERASE_SKETCH_BUTTON.setAttribute("id", "erase-sketch-button");
ERASE_SKETCH_BUTTON.textContent = "Clean slate";
ERASE_SKETCH_BUTTON.addEventListener("click", sketchPadSizer);

eraserDiv.appendChild(ERASE_SKETCH_BUTTON)

titleNdPromptBar.appendChild(sketchPadTitle);
titleNdPromptBar.appendChild(PROMPT_BUTTON);
MAIN_CONTAINER.appendChild(titleNdPromptBar);

sketchPadNdEraser.appendChild(sketchPad);
sketchPadNdEraser.appendChild(eraserDiv);
MAIN_CONTAINER.appendChild(sketchPadNdEraser);


sketchPadSizer();
sketchPadTitle.textContent = `${numberOfCellRows} * ${numberOfCellRows} GRID SKETCHPAD`;





function promptSketchSize() {
  let userInputtedGridSize = Number(prompt("Enter grid size (1-100),\n e.g. 16 for a 16×16 grid"));
  if(userInputtedGridSize >= 1 && userInputtedGridSize <= 100) {
    numberOfCellRows = userInputtedGridSize;
    numberOfCellColumns = userInputtedGridSize;

    squaredCellWidth = SKETCH_PAD_SIZE / numberOfCellRows;
    sketchPadSizer();
  }
  else {
    numberOfCellRows = numberOfCellRows;
  }
}

function sketchPadSizer() {
  sketchPad.replaceChildren(); 
  sketchPadTitle.textContent = `${numberOfCellRows} * ${numberOfCellRows} GRID SKETCHPAD`;

  for(let i = 0; i < numberOfCellRows; i++) {
    let gridRow = document.createElement("div");
    gridRow.classList.toggle("grid-rows");
    gridRow.style.width = `${SKETCH_PAD_SIZE}px`;
    gridRow.style.height = `${squaredCellWidth}px`;
    for(let j = 0; j < numberOfCellColumns; j++) {
        let gridColumn = document.createElement("divs");
        gridColumn.classList.toggle("grid-columns");
        gridColumn.style.width = `${squaredCellWidth}px`;
        gridColumn.style.height = `${squaredCellWidth}px`;

        gridColumn.addEventListener("mouseenter", bgColorChange); 
        gridColumn.addEventListener("mouseenter", opacityLvlChange);

        gridRow.appendChild(gridColumn);
    }
    sketchPad.appendChild(gridRow);
  }
}

function random(number) {
  return Math.floor(Math.random() * (number + 1));
}

function bgColorChange(e) {
  const rndCol = `rgb(${random(255)} ${random(255)} ${random(255)})`;
  e.target.style.backgroundColor = rndCol;
}

function opacityLvlChange(e) {
  let opacity = Number(e.target.style.opacity);
  if (opacity >= 0.1 && opacity <= 0.9) {
      e.target.style.opacity = opacity + 0.1;
  }
  else if(opacity == 1) {
    e.target.style.opacity = opacity;
  }else {
      e.target.style.opacity = 0.1;
  }
}
