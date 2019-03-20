/*
Write a function that, given a string, finds the longest run of identical characters
and returns an array containing the start and end indices of that run.

If there are two runs of equal length, return the first one.
Return [0,0] for no runs.
*/

function longestRun(string) {
    let current = [0, 0];
    let longest = [0, 0];
    for (let i = 1; i < string.length; i++) {
        // if there is a run
        if (string[i] === string[i - 1]) {
            current[1] = i;
            let diffCurrent = current[1] - current[0];
            let diffLongest = longest[1] - longest[0];
            if (diffCurrent > diffLongest) {
                longest = current;
            }
        } else {
            current = [i, i]
        }
    }
    return longest;
}


longestRun('abbbcc') // [ 1, 3 ]
longestRun('aabbc') // [ 0, 1 ]
longestRun('') // [ 0, 0 ]
longestRun('mississippi') // [ 2, 3 ]
longestRun('abcdefgh') // [ 0, 0 ]
longestRun('abccccccc') // [ 2, 8 ]