// we have to create a function which takes an input from user (number of squares) and create a grid of squares div
// to do so we have to create a 2d structure
// first we will run a for loop for number of div's in row and inside that for loop we will run a new for loop of squares in column.
//for every row iteration we will create 1 div and in that div we will create divs as many as columns are needed



const container = document.querySelector('.container');
const button = document.querySelector('button');


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
        console.log(prompt);
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
}


button.addEventListener('click', createNewGrid)