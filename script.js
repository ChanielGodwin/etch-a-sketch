const SKETCH_PAD_SIZE = 960;
const SKETCH_PAD = document.querySelector("#container");
const SKETCH_PAD_CONTAINER = document.querySelector("body");
const PROMPT_BUTTON = document.createElement("button");

let squaredCellWidth = 60;
let numberOfCellRows = 16;
let numberOfCellColumns = numberOfCellRows;

PROMPT_BUTTON.setAttribute("id", "prompt-button");
PROMPT_BUTTON.textContent = "Set boxes size";
PROMPT_BUTTON.addEventListener("click", promptSketchSize);

SKETCH_PAD_CONTAINER.insertAdjacentElement('afterbegin', PROMPT_BUTTON);

SKETCH_PAD.style.width = SKETCH_PAD_SIZE;
SKETCH_PAD.style.height = SKETCH_PAD_SIZE;
sketchPadSizer();





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
  SKETCH_PAD.replaceChildren(); 

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
    SKETCH_PAD.appendChild(gridRow);
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






/*
const SKETCH_PAD_SIZE = 960;
let squaredCellWidth = 60;
let numberOfCellRows = 16;
let numberOfCellColumns = numberOfCellRows;
  let cellOpacity = 0.1;
let SKETCH_PAD = document.querySelector("#container");
let SKETCH_PAD_CONTAINER = document.querySelector("body");
const PROMPT_BUTTON = document.createElement("button");

SKETCH_PAD.addEventListener("mouseout", bgColorChange);
PROMPT_BUTTON.setAttribute("id", "prompt-button");
PROMPT_BUTTON.textContent = "Set boxes size";
SKETCH_PAD_CONTAINER.insertAdjacentElement('afterbegin', PROMPT_BUTTON);



sketchPadSizer();
PROMPT_BUTTON.addEventListener("click", promptSketchSize);

SKETCH_PAD.style.width = SKETCH_PAD_SIZE;
SKETCH_PAD.style.height = SKETCH_PAD_SIZE;






function promptSketchSize() {
  let userInputtedGridSize = prompt("Enter sizes of box (1-100): ");
  if(userInputtedGridSize >= 1 && userInputtedGridSize <= 100) {
    numberOfCellRows = userInputtedGridSize;
    numberOfCellColumns = userInputtedGridSize;

    squaredCellWidth = SKETCH_PAD_SIZE / numberOfCellRows;
    sketchPadSizer();
    console.log(numberOfCellRows);
  }
  else {
    numberOfCellRows = numberOfCellRows;
  }
}

function sketchPadSizer() {
  SKETCH_PAD.replaceChildren(); 

   // gridRow.style.width = SKETCH_PAD_SIZE;
    //gridRow.style.height = squaredCellWidth;
   // gridColumn.style.width = squaredCellWidth;
    //gridColumn.style.height = squaredCellWidth;

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
          
        gridRow.appendChild(gridColumn);
    }
    

    SKETCH_PAD.appendChild(gridRow);
  }

}

function random(number) {
  return Math.floor(Math.random() * (number + 1));
}

function bgColorChange(e) {
let opacity = Number(e.target.style.opacity);
  const rndCol = `rgb(${random(255)} ${random(255)} ${random(255)})`;
  e.target.style.backgroundColor = rndCol;


if (opacity >= 0.1 && opacity <= 0.9) {
    e.target.style.opacity = opacity + 0.1;
}
else if(opacity == 1) {
  e.target.style.opacity = opacity;
}else {
    e.target.style.opacity = cellOpacity;
}


  // e.stopPropagation();
}
*/