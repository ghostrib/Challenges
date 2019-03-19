/*
Write a function that accepts a number n and returns the nth fibonacci number.
*/

const nthFibonacci = n => {
    let num0 = 0, num1 = 1, temp;
    while (n--) {
        temp = num1;
        num1 += num0;
        num0 = temp;
    }
    return num0
};


nthFibonacci(5) // 5
nthFibonacci(6) // 8
nthFibonacci(7) // 13
nthFibonacci(8) // 21
nthFibonacci(9) // 34

