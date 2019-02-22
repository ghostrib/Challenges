/*
Given a sorted array and a value, implement a binary search of the array.
If the given value is found in the array, return the index. 
If the value is not found, return -1
*/

const binarySearch = (array, value) => {
    let start = 0;
    let end = array.length - 1;
    let middle = Math.floor((start + end) / 2);
    while (array[middle] !== value && start <= end) {
        if (value < array[middle]) end = middle - 1;
        else start = middle + 1;
        middle = Math.floor((start + end) / 2);
    }
    return array[middle] === value ? middle : -1;
}
