/*
Zero Sum
Given an array of negative/positive integers, return true if there exists two numbers whose sum is zero.
*/

function zeroSum(numbers) {
    let left = 0;
    let right = numbers.length - 1;
    while (left < right) {
        let sum = numbers[left] + numbers[right];
        if (sum === 0) return true;
        sum < 0 ? left++ : right--
    }
    return false
}
