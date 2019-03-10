/*

Someone wrote a tree implementation, b
ut they forgot to finish writing the definitions for addChild and contains.

Help this person finish their tree by adding in the missing code for these methods.
*/

var treeMaker = function (value) {
    var newTree = Object.create(treeMaker.methods);
    newTree.value = value;
    newTree.children = [];
    return newTree;
};

treeMaker.methods = {};

treeMaker.methods.addChild = function (value) {
    this.children.push(treeMaker(value))
}

treeMaker.methods.contains = function (value) {
    if (this.value === value) return true;
    for (let child of this.children) {
        if (child.contains(value)) return true;
    }
    return false
}
