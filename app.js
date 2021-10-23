const board = document.querySelector('#board');
const colors = [
    '#CCF600', '#A1B92E', '#85A000', '#DAFB3F',
    '#E3FB71', '#0A67A3', '#3E97D1', '#65A6D1',
    '#FF8E00', '#BF8030', '#A65C00', '#FFAA40',
    '#FFC173', '#A600A6', '#D235D2', '#D25FD2'];

const SQUARES_NUMBER = 600;

for ( let i = 0; i < SQUARES_NUMBER; i++){
    const square =document.createElement('div');
    square.classList.add('square');

    square.addEventListener('mouseover', setColor);
    square.addEventListener('mouseleave', removeColor);
    board.append(square);
}

function setColor(event) {
    const element = event.target
    const color = getRandomColor(colors.length);
    element.style.background = color;
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px${color}`;
}

function removeColor(event) {
    const element = event.target
    element.style.background = '#1d1d1d';
    element.style.boxShadow = `0 0 2px #000`;
}
function getRandomColor(value){
    return colors[Math.floor(Math.random() * value)];

}