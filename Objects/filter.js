/*
Make an object method that mimics the array filter method
*/

Object.prototype.filter = function (cb) {
    const result = {};
    for (let key in this) {
        if (cb(this[key])) {
            result[key] = this[key];
        }
    }
    return result;
}

const obj = { a: 1, b: 2, c: 3, d: 4 }
var result = obj.filter(function (value) {
    if (value > 2) {
        return value;
    }
})

console.log(result) //{c: 3, d: 4}