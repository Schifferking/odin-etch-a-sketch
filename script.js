function createDivs() {
    const container = document.querySelector('.container');
    
    for(let i = 1; i <= 256; i++) {    
        const newDiv = document.createElement('div');
        newDiv.setAttribute('class', 'square');
        container.appendChild(newDiv);
    }
}

createDivs();