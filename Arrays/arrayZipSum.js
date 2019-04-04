/*
Array Zip Sum

Given two arrays of negative/positive integers,
return a new array such that each element at index n
is the sum of the two elements from the other arrays at their index n’s.
*/

function zipSum(arr1, arr2) {
    const result = [];
    const shortest = Math.min(arr1.length, arr2.length);
    for (let i = 0; i < shortest; i++) {
        result[i] = arr1[i] + arr2[i];
    }
    return result;
}
