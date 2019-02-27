/*
Given an array of arbitrarily nested arrays, return n,
where n is the deepest level that contains a non-array value.
*/

const arrayception = array => {
    let count;
    let depth = 0;
    for (let item of array) {
        if (item.length === 0) {
            count = 0;
        } else if (Array.isArray(item)) {
            count = arrayception(item);
            if (count > 0) {
                count += 1;
            }
        } else {
            count = 1;
        }
        if (count > depth) {
            depth = count;
        }
    }
    return depth
}

/*
arrayception([ [ 5 ], [ [ ] ] ]) // 2
arrayception([ 10, 20, 30, 40 ]) // 1
arrayception([ [ 10, 20 ], [ [ 30, [ 40 ] ] ] ]) // 4
arrayception([ ]) // 0
arrayception([ [ [ ] ] ]) // 0
*/