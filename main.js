


const container = document.querySelector('.container');
const button = document.querySelector('button');




function addClass(classToAdd, e = e) {
    e.target.classList.add(`${classToAdd}`);

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


function createNewGrid(e) {
    let numberOfSquare = getRowAndColumn();
    //it will check if there is already a grid container present and if there is it will remove that container and create a new one.
    const gridContainer = document.querySelector('.gridContainer');
    if (gridContainer) {

        container.removeChild(gridContainer);
    }
    createGrid(numberOfSquare, numberOfSquare);
    activateColumnEventListener();
}


function activateColumnEventListener() {//to change the column div's color to blue when hovered over
    const columnDivs = document.querySelectorAll('.columnDiv');
    columnDivs.forEach(column => {
        column.addEventListener('mouseenter', (e) => addClass('backgroundBlue', e));
    });
}


button.addEventListener('click', createNewGrid)
