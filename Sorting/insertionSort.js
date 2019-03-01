/*
Insertion sort is a basic sorting algorithm.

Insertion sort iterates over an array, growing a sorted array behind the current location.
It takes each element from the input and finds the spot,
up to the current point where that element belongs (in constant space).
It does this until it gets to the end of the array.

Insertion sort should be implemented as a stable sort. This means that equal elements
should retain their relative order. Numbers, as primitives, give us no way to check this,
so we’ll be sorting objects with a value field, on which they will be sorted, like so:

[{value: 10}, {value: 5, order: 1}, {value: 5, order: 2}]

A stable sort must return

[{value: 5, order: 1}, {value: 5, order: 2}, {value: 10}]

in that order.
*/

function swap(array, idx1, idx2) {
    const temp = array[idx1];
    array[idx1] = array[idx2];
    array[idx2] = temp;
}

function insertionSort(array) {
    for (var i = 0; i < array.length; i++) {
        for (var j = i; j > 0; j--) {
            if (array[j].value >= array[j - 1].value) break;
            else swap(array, j, j - 1);
        }
    }
    return array
}


/*

const arr1 = [{ "value": 3 }, { "value": 1 }, { "value": 2 }]
const arr2 = [{ "value": 10 }, { "value": 5, "order": 1 }, { "value": 5, "order": 2 }];

insertionSort(arr1) // [ { "value": 1 }, { "value": 2 }, { "value": 3 } ]
insertionSort(arr2) // [ { "value": 5, "order": 1 }, { "value": 5, "order": 2 }, { "value": 10 } ]

*/