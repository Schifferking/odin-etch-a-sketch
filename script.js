function deleteContainer() {
  const cntr = document.querySelector('.container');
  document.body.removeChild(cntr);
}

function updateGrid() {
  deleteContainer();
  //create new container
  //ask for a number not greater than 100
  //createGrid(number asked)
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

createGrid();