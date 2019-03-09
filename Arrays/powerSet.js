/*

Power Set

Return an array that contains the power set of a given string.
The power set is a set of all the possible subsets, including the empty set.

Make sure your code does the following:

All characters in a subset should be sorted alphabetically,
and the array of subsets should be sorted alphabetically.

Sets of the same characters are considered duplicates regardless of order
and count only once, e.g. ‘ab’ and ‘ba’ are the same.

Duplicate characters in strings should be ignored;
for example, ‘obama’ should be evaluated as if it only contained one ‘a’.

See the result below.
Examples

powerSet("a") // [ "", "a" ]
powerSet("ab") // [ "", "a", "ab", "b" ]
powerSet("horse") // [ "", "e", "eh", "eho", "ehor", "ehors", "ehos", "ehr", "ehrs", "ehs", "eo", "eor", "eors", "eos", "er", "ers", "es", "h", "ho", "hor", "hors", "hos", "hr", "hrs", "hs", "o", "or", "ors", "os", "r", "rs", "s" ]
powerSet("obama") // [ "", "a", "ab", "abm", "abmo", "abo", "am", "amo", "ao", "b", "bm", "bmo", "bo", "m", "mo", "o" ]

*/

const powerSet = string => {
    let output = [''];
    [...new Set(string)].sort().forEach(char => {
        const combos = [];
        output.forEach(item => {
            combos.push(item + char);
        });
        output = output.concat(combos);
    })
    return output.sort();
};
