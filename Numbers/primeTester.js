/*
Prime Tester
A prime number is an integer greater than 1 that has no divisors other than itself and 1.
Write a function that accepts a number and returns true if it’s a prime number, false if it’s not.
*/

function primeTester(n) {
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return n !== 1 && n !== 0;
}
