const characterFrequency = str => {
    return sortChars(frequencyCounter(str));
}

const sortChars = obj => {
    const result = [];
    for (let key in obj) {
        result.push([key, obj[key]]);
    }
    const sorted = result.sort();
    sorted.sort((a, b) => b[1] - a[1]);
    return sorted;
}

const frequencyCounter = str => {
    const obj = {};
    for (let char of str) {
        obj[char] = ++obj[char] || 1;
    }
    return obj;
}
