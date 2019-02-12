/*
Write a function that accepts two strings as arguments, and returns only the characters that are common to both strings.

Your function should return the common characters in the same order that they appear in the first argument.
Do not return duplicate characters and ignore whitespace in your returned string.

Example: commonCharacters('acexivou', 'aegihobu')
Returns: 'aeiou'
*/

const commonCharacters = (str1, str2) => {
    let result = '';
    for (let char of str1) {
        if (str2.includes(char) && !result.includes(char) && char !== ' ') {
            result += char;
        }
    }
    return result;
}
