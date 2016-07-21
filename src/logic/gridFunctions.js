const genRand = () => {
    let newBinary = Math.floor(Math.random() * (3 - 0 + 1)) + 0;
    newBinary = newBinary == 0 ? 1 : 0;
    return newBinary;
};

const genRow = (width) => {
    let row = [];
    for (let i = 0; i < width; i++) {
        row.push(genRand());
    }
    return row;
};

const genGrid = (height, width) => {
    let grid = [];
    for (let i = 0; i < height; i++) {
        grid.push(genRow(width));
    }
    return grid;
};

const genBlankRow = (width) => {
    let row = [];
    for (let i = 0; i < width; i++) {
        row.push(0);
    }
    return row;
};

const genBlankGrid = (height, width) => {
    let grid = [];
    for (let i = 0; i < height; i++) {
        grid.push(genBlankRow(width));
    }
    return grid;
};

const cellScore = (input, row, col) => {
    let score = 0;
    const scorePositions = [
        [-1, -1],
        [0, -1],
        [1, -1],
        [-1, 0],
        [1, 0],
        [-1, 1],
        [0, 1],
        [1, 1]
    ]; // [row,col]
    for (let i = 0; i < scorePositions.length; i++) {
        let x = row + scorePositions[i][1];
        let y = col + scorePositions[i][0];
        if (x < 0) {
            x = input.length - 1;
        }
        if (y < 0) {
            y = input[row].length - 1;
        }
        if (x > input.length - 1) {
            x = 0;
        }
        if (y > input[row].length - 1) {
            y = 0;
        }
        if (input[x][y] == 1) {
            score++;
        }
    }
    return score;
};

const newLiveCellValue = (score) => {
    switch (score) {
        case 0:
            return 0;
        case 1:
            return 0;
        case 2:
            return 1;
        case 3:
            return 1;
        default:
            return 0;
    }
};

const newDeadCellValue = (score) => {
    switch (score) {
        case 3:
            return 1;
        default:
            return 0;
    }
};

const scoreGrid = (input) => {
    let newGrid = [];
    for (let row = 0; row < input.length; row++) {
        let newRow = [];
        for (let col = 0; col < input[row].length; col++) {
            let newValue;
            let currentValue = input[row][col];
            let cellSc = cellScore(input, row, col);
            if (currentValue == 0) {
                newValue = newDeadCellValue(cellSc);
            } else {
                newValue = newLiveCellValue(cellSc);
            }
            newRow.push(newValue);
        }
        newGrid.push(newRow);
    }
    return newGrid;
};

export const nextGrid = (gameGrid) => {
    return scoreGrid(gameGrid);
};

export const blankGrid = (height, width) => {
    return genBlankGrid(height, width);
};

export const newGrid = (height, width) => {
    return genGrid(height, width);
};
