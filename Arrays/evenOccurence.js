/*
Find the first item that occurs an even number of times in an array.
Remember to handle multiple even-occurrence items and return the first one.
Return null if there are no even-occurrence items.

Examples
evenOccurence([ 1, 3, 3, 3, 2, 4, 4, 2, 5 ]) // 2
evenOccurence([ "cat", "dog", "dig", "cat" ]) // "cat"
*/

const evenOccurrence = arr => {
    let obj = {};
    let result;
    for (let item of arr) {
        obj['item-' + item] = obj['item-' + item] + 1 || 1;
    }

    for (let key in obj) {
        if (obj[key] % 2 === 0) {
            result = key.substr(5);
            if (result % 1 === 0) {
                result = Number(result)
            }
            return result
        }
    }
    return null
}
