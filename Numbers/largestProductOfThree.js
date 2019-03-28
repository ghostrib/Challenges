/*
Largest Product of Three

Write a function that accepts an array of integers
and returns the largest product possible from three of those numbers.
*/

function largestProductOfThree(array) {
    array.sort((a, b) => b - a);
    const product1 = array[0] * array[1] * array[2];
    const product2 = array[0] * array[array.length - 1] * array[array.length - 2];
    return Math.max(product1, product2);
}

largestProductOfThree([2, 1, 3, 7]) // 42
largestProductOfThree([0, 2, 3]) // 0