// we have to create a function which takes an input from user (number of squares) and create a grid of squares div
// to do so we have to create a 2d structure
// first we will run a for loop for number of div's in row and inside that for loop we will run a new for loop of squares in column.
//for every row iteration we will create 1 div and in that div we will create divs as many as columns are needed



const container = document.querySelector('.container');

function createGrid(row, column) {
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
        container.appendChild(rowDiv);
    }
}

createGrid(16, 16);