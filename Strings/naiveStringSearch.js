/*
Write a function which takes two strings, a long string and a short string
and returns the number of times the short string appears in the longer string
*/

const stringSearch = (long, short) => {
    let count = 0;
    for (let i = 0; i < long.length; i++) {
        for (let j = 0; j < short.length; j++) {
            if (short[j] !== long[i + j]) {
                break;
            }
            if (j === short.length - 1) {
                count++;
            }
        }
    }
    return count;
}

// stringSearch('lorie loled', 'lol') // 1
// stringSearch('wowomgzomg', 'omg') // 2
// stringSearch('hello world', 'bye') // 0