/*
Longest Palindrome

Implement a function that finds the longest palindrome in a given string.
For example, in the string “My dad is a racecar athlete”, the longest palindrome is “a racecar a”.

Count whitespaces as valid characters.
Other palindromes in the above string include “dad”, “ete”, “ dad “ (including whitespace on each side of dad).
*/

function longestPalindrome(string) {
    let longest = '';
    for (let i = 0; i < string.length; i++) {
        for (let j = i; j < string.length; j++) {
            let substring = string.slice(i, j + 1);
            if (isPalindrome(substring)) {
                if (substring.length > longest.length) {
                    longest = substring;
                }
            }
        }
    }
    return longest;
}

function isPalindrome(string) {
    return string.split('').reverse().join('') === string;
}

longestPalindrome('aibohphobia') // 'aibohphobia'
longestPalindrome('My dad is a racecar athlete') // 'a racecar a'