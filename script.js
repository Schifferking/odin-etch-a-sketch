function askNumber() {
  let num = 0;

  do {
    num = parseInt(prompt("Please enter a number that represents the number of squares per side of the new grid (not greater than 100):"));
  } while(num <= 0 || num > 100);
  
  return num;
}

function createContainer(numOfSquares) {
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
        newDiv.style.backgroundColor = "black";
    });
    container.appendChild(newDiv);
  }
}

//Add functionality to button
btn = document.querySelector('button');
btn.addEventListener('click', updateGrid);

//TODO
//change size of squares based on div size
createGrid();