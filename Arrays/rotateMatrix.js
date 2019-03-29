/*
Rotate Matrix

Write a function that rotates a NxN matrix 90 degrees clockwise.
A matrix, also called a 2-D array, is simply an array of arrays of values.

2x2 MATRIX EXAMPLE:

[
    [1, 2],
    [3, 4]
]

Rotated:

[
    [3, 1],
    [4, 2]
]

4x4 MATRIX EXAMPLE:

[
    [ 1, 2, 3, 4],
    [ 5, 6, 7, 8],
    [ 9, 'A','B','C'],
    ['D','E','F','G']
]

Rotated:

[
    ['D', 9, 5, 1],
    ['E', 'A', 6, 2],
    ['F','B', 7, 3],
    ['G','C', 8, 4]
]
*/

const rotateMatrix = matrix => {
    const length = matrix.length - 1;
    for (let i = 0; i <= length / 2; i++) {
        for (let j = i; j < length - i; j++) {
            let temp = matrix[i][j];
            matrix[i][j] = matrix[length - j][i];
            matrix[length - j][i] = matrix[length - i][length - j];
            matrix[length - i][length - j] = matrix[j][length - i];
            matrix[j][length - i] = temp;
        }
    }
    return matrix;
}