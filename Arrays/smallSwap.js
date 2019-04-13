/*
Small Swap

Given an array of negative/positive integers,
swap the smallest element of the array with the first element of the array.
*/

function smallSwap(numbers) {
    if (numbers.length === 0) return numbers;
    let smallest = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] < smallest) smallest = numbers[i];
    }
    const toSwap = numbers.indexOf(smallest);
    const first = numbers[0];
    numbers[0] = smallest;
    numbers[toSwap] = first;
    return numbers;
}
