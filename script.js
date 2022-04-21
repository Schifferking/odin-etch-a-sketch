function setRandomColor(square) {
  const r = randomIntRange(0, 255);
  const g = randomIntRange(0, 255);
  const b = randomIntRange(0, 255);
  square.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
}

function randomIntRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

function setSquareSize(numOfSquares) {
  const squares = document.querySelectorAll('.square');
  let containerOffsetWidth = 1000 - (numOfSquares * 2);
  let squareSize = containerOffsetWidth / numOfSquares;

  squares.forEach(square => {
    square.style.width = squareSize + "px";
    square.style.height = squareSize + "px";
  });
}

function askNumber() {
  let num = 0;

  do {
    num = parseInt(prompt("Please enter a number that represents the number of squares per side of the new grid (not greater than 100):"));
  } while(num <= 0 || num > 100);
  
  return num;
}

function createContainer() {
  const cntr = document.createElement('div');
  cntr.setAttribute('class', 'container');  
  document.body.appendChild(cntr);
}

function deleteContainer() {
  const cntr = document.querySelector('.container');
  document.body.removeChild(cntr);
}

function updateGrid() {
  let num = askNumber();

  deleteContainer();
  createContainer();
  createGrid(num);
}

function createGrid(squarePerSide=16) {
  const container = document.querySelector('.container');
    
  for(let i = 1; i <= squarePerSide ** 2; i++) {    
    const newDiv = document.createElement('div');
    newDiv.setAttribute('class', 'square'); 
    newDiv.addEventListener("mouseover", function(event) {
      if (newDiv.style.backgroundColor === "") {
        setRandomColor(newDiv);

        //Use the text inside the div to count the times that the mouse hovered a div 
        newDiv.style.fontSize = 0;
        newDiv.style.textContent = "1";
      } else {
        let timesHovered = parseInt(newDiv.style.textContent);
        timesHovered += 1;
        newDiv.style.textContent = timesHovered;          
        if (timesHovered === 10) {
          newDiv.style.backgroundColor = "rgb(" + 0 + "," + 0 + "," + 0 + ")";
        }          
      }
    });
    container.appendChild(newDiv);
  }
  setSquareSize(squarePerSide);
}

//Add functionality to button
btn = document.querySelector('button');
btn.addEventListener('click', updateGrid);

createGrid(16);
setSquareSize(16);