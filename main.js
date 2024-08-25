


const container = document.querySelector('.container');
const button = document.querySelector('button');


function getRandomNumber(number = 255) {
    return Math.floor(Math.random() * number);
}


function addClass(classToAdd, e = e) {
    e.target.classList.add(classToAdd);
}


function changeBackgroundColor(e = e) {
    if (!(e.target.classList.contains('bgColorChanged'))) {
        //bg color will not change if its already changed
        e.target.style.backgroundColor = `
        rgb(${getRandomNumber()}, ${getRandomNumber()}, ${getRandomNumber()})`;
        e.target.style.opacity = '.1';
        addClass('bgColorChanged', e);
    } else {

        if (e.target.style.opacity < '1') {
            e.target.style.opacity = `${+e.target.style.opacity + .1}`;

        }
    }

}


function createContainerForGrid() {
    const gridContainer = document.createElement('div');
    gridContainer.classList.add('gridContainer')
    return gridContainer;
}


function createGrid(row, column) {
    const gridContainer = createContainerForGrid();
    for (let i = 0; i < row; i++) { //to create rows
        const rowDiv = document.createElement('div');
        rowDiv.classList.add('rowDiv');
        rowDiv.classList.add('div');
        for (let j = 0; j < column; j++) { // to create columns
            const columnDiv = document.createElement('div');
            columnDiv.classList.add('columnDiv');
            columnDiv.classList.add('div');
            rowDiv.appendChild(columnDiv);
        }
        gridContainer.appendChild(rowDiv);
    }
    container.appendChild(gridContainer);
}


function getRowAndColumn() {
    let number = 0;
    do {
        number = prompt(`Enter number of squares you want in the grid(Limit is 100)`);

    } while (number > 100);
    return number;
}
function removeGridContainer() {
    const gridContainer = document.querySelector('.gridContainer');
    if (gridContainer) {

        container.removeChild(gridContainer);
    }
}

function createNewGrid(e) {
    let numberOfSquare = getRowAndColumn();
    //it will check if there is already a grid container present and if there is it will remove that container and create a new one.
    removeGridContainer();
    createGrid(numberOfSquare, numberOfSquare);
    activateColumnEventListener();
}


function activateColumnEventListener() {//to change the column div's color to blue when hovered over
    const columnDivs = document.querySelectorAll('.columnDiv');
    columnDivs.forEach(column => {
        column.addEventListener('mouseenter', (e) => changeBackgroundColor(e));
    });
}

createNewGrid();
button.addEventListener('click', createNewGrid)
