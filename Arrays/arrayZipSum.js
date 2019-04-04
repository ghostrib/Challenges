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

zipSum([10, 20, 30], [1, 2, 3]) // [11, 22, 33]
zipSum([100, 1], [50, 5]) // [150, 6]
zipSum([10, 20, 30], [1, 2]) // [11, 22]
zipSum([10, 20], [1, 2, 3]) // [11, 22]
