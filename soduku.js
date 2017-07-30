function check_rows(grid) {
    for (let i = 0; i < 9; i++) {
        let nos = grid[i].filter(function(e) {
            return e != '.';
        });
        if ((new Set(nos)).size !== nos.length)
            return false;
    }
    return true;
}

function check_columns(grid) {
    for (let i = 0; i < 9; i++) {
        let nos = [];
        for(let j = 0; j < 9; j++) {
            if (grid[j][i] != '.'){
                nos.push(grid[j][i]);
            }
        }
        if ((new Set(nos)).size !== nos.length)
            return false;
    }
    return true;
}

function check_boxes(grid) {
    let count = 0;
    // check 9 boxes
    while (count < 3) {
        let a = 0, b = 0;
        for (let k = 0; k < 3; k++) {
            let nos = [];
            for (let i = count * 3; i < (count * 3) + 3; i++) {
                for(let j = (k * 3); j < (k * 3) + 3; j++) {
                    if(grid[i][j] != '.')
                        nos.push(grid[i][j]);
                }
            }
            if ((new Set(nos)).size !== nos.length)
                return false;
        }
        count++;
    }
    return true;
}

function sudoku2(grid) {
    // console.log(check_boxes(grid));
    console.log(check_rows(grid), check_columns(grid), check_boxes(grid));
    return check_rows(grid) && check_columns(grid) && check_boxes(grid);
    // return check_boxes(grid);
}

grid = [[".","4",".",".",".",".",".",".","."],
        [".",".","4",".",".",".",".",".","."],
        [".",".",".","1",".",".","7",".","."],
        [".",".",".",".",".",".",".",".","."],
        [".",".",".","3",".",".",".","6","."],
        [".",".",".",".",".","6",".","9","."],
        [".",".",".",".","1",".",".",".","."],
        [".",".",".",".",".",".","2",".","."],
        [".",".",".","8",".",".",".",".","."]]

sudoku2(grid);