/*
Make an array method that can return whether or not a context array is a subset of an input array.
To simplify the problem, you can assume that both arrays will contain only strings.
*/

Array.prototype.isSubsetOf = function (array) {
    for (let item of this) {
        if (!array.includes(item)) {
            return false
        }
    }
    return true;
};
