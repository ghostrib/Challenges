/*
Filter Palindromes
Given an array of words (array of strings), return all words that are palindromes.
*/

const filterPalindromes = words => {
    const result = [];
    for (let word of words) {
        if (isPalindrome(word)) {
            result.push(word)
        }
    }
    return result;
}

const getAlphaChars = str => {
    return str.toLowerCase().match(/\w+/g).join('');
}

const reverseString = str => {
    return str.split('').reverse().join('');
}

const isPalindrome = str => {
    const copy = getAlphaChars(str);
    return copy === reverseString(copy);
}

filterPalindromes(["word", "Ana", "race car"]) // [ 'Ana', 'race car' ];
