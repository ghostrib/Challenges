/*
Given an arbitrary input string, return the first non-repeating character.
For strings with all repeats, return 'sorry'.
*/

const mapChars = string => {
    const map = {};
    for (let char of string) {
        map[char] = map[char] + 1 || 1;
    }
    return map;
}

const firstNonRepeatedCharacter = string => {
    const map = mapChars(string);
    for (let char of string) {
        if (map[char] === 1) return char;
    }
    return 'sorry'
}