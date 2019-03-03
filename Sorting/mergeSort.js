/*
Implement a function that sorts an array of numbers using the “mergesort” algorithm.

Mergesort uses a divide-and-conquer strategy.
It begins by treating the input list of length N as a set of N “sublists” of length 1,
which are considered to be sorted.

Adjacent sublists are then “merged” into sorted sublists of length 2,
which are merged into sorted sublists of length 4, and so on,
until only a single sorted list remains.
(Note, if N is odd, an extra sublist of length 1 will be left after the first merge, and so on.)

This can be implemented using either a recursive (“top-down”) or an iterative (“bottom-up”) approach.
*/

const mergeSort = array => {
    if (array.length < 2) {
        return array;
    }
    let middle = Math.floor(array.length / 2);
    let left = array.slice(0, middle);
    let right = array.slice(middle);
    return merge(mergeSort(left), mergeSort(right));
}

const merge = (left, right) => {
    let result = [];
    let l = 0;
    let r = 0;
    while (l < left.length && r < right.length) {
        if (left[l] < right[r]) {
            result.push(left[l++]);
        } else {
            result.push(right[r++]);
        }
    }
    return result.concat(left.slice(l)).concat(right.slice(r))
}
