function createDivs() {
  const container = document.querySelector('.container');
    
  for(let i = 1; i <= 256; i++) {    
    const newDiv = document.createElement('div');
    newDiv.setAttribute('class', 'square'); 
    newDiv.addEventListener("mouseover", function(event) {
        newDiv.style.backgroundColor = "black";
    });
    container.appendChild(newDiv);
  }
}

createDivs();