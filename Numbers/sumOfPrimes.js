/*
Sum of Primes
Given a positive number, return the sum of all positive primes that are less than or equal to that number.
*/

function sumOfPrimes(n) {
    const primes = [];
    for (let i = 2; i <= n; i++) {
        if (isPrime(i)) primes.push(i)
    }
    return primes.reduce((a, b) => a + b, 0)
}

function isPrime(n) {
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return n !== 1 && n !== 0;
}


sumOfPrimes(4) // 5
sumOfPrimes(5) // 10
sumOfPrimes(6) // 10