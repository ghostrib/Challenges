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

