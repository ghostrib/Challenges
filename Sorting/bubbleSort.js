/*
Bubble sort is considered the most basic sorting algorithm in Computer Science.
It works by starting at the first element of an array and comparing it to the second element:

If the first element is greater than the second element, it swaps the two.
It then compares the second to the third, and the third to the fourth, and so on.
In this way, the largest values ‘bubble’ to the end of the array.
Once it gets to the end of the array, it starts over and repeats the process until the array is sorted numerically.

Implement a function that takes an array and sorts it using this technique.
*/

const swap = (array, index1, index2) => {
    const temp = array[index1];
    array[index1] = array[index2];
    array[index2] = temp;
}

const bubbleSort = array => {
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < array.length; i++) {
            let j = i + 1;
            if (array[i] > array[j]) {
                swap(array, i, j);
                swapped = true;
            }
        }
    } while (swapped);
    return array;
}

//const arr = [7, 38, 48, 3, 42, 14, 84, 2, 15, 68, 83, 22, 9, 18, 33, 92, 1, 39];
//console.log(bubbleSort(arr)); // [ 1, 2, 3, 7, 9, 14, 15, 18, 22, 33, 38, 39, 42, 48, 68, 83, 84, 92 ];
