/*
Quicksort (sometimes called partition-exchange sort) is an efficient sorting algorithm.
When implemented well, it can be about two or three times faster than its main competitors, merge sort and heapsort.

It is a comparison sort, meaning that it can sort items of any type for which a “less-than” relation is defined.

Quicksort uses these steps.
1.  Choose any element of the array to be the pivot.
    There are multiple ways of selecting a pivot;
    explore the options and note their advantages.

2.  Divide all other elements (except the pivot) into two partitions.

3.  All elements less than the pivot must be in the first partition.

4.  All elements greater than the pivot must be in the second partition.

5.  Recursively apply the above process to the two partitions

6.  Join the first sorted partition, the pivot, and the second sorted partition.

The best pivot creates partitions of equal length (or lengths differing by 1).
The worst pivot creates an empty partition (for example, if the pivot is the first or last element of a sorted array).
*/

const quickSort = (array) => {
    if (array.length < 2) return array;
    let pivot = array[0];
    let left = [];
    let right = [];
    for (let i = 1; i < array.length; i++) {
        if (array[i] < pivot) {
            left.push(array[i]);
        } else {
            right.push(array[i]);
        }
    }
    return [...quickSort(left), pivot, ...quickSort(right)]
}

/*
quickSort([4,7,2,1,6,3,9,8,5]) // [1,2,3,4,5,6,7,8,9]
*/