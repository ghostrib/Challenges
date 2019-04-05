/*
Balanced Parenthesis
Given a string, return true if it contains balanced parenthesis ().
*/

const isBalanced = str => {
    let count = 0;
    for (let char of str) {
        if (char === '(') count += 1;
        if (char === ')') count -= 1;
        if (count < 0) return false;
    }
    return count === 0;
};

