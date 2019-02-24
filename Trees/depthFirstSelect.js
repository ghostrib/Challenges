/*
Tree Depth-First Select
Implement a depth-first method on a tree class.

DFSelect accepts a filter function, calls that function on each of the nodes in Depth First order, and returns a flat array of node values of the tree for which the filter returns true. The filter function has a signature of filter(value, depth). Depth is the number of levels nested a node is from the top of the tree, which has a depth of 0.

Example:

var root1 = new Tree(1);  // depth 0
var branch2 = root1.addChild(2); // depth 1
var branch3 = root1.addChild(3); // depth 1
var leaf4 = branch2.addChild(4); // depth 2
var leaf5 = branch2.addChild(5); // depth 2
var leaf6 = branch3.addChild(6); // depth 2
var leaf7 = branch3.addChild(7); // depth 2

root1.DFSelect(function (value, depth) {
  return value % 2 === 1;
}) //=> [1, 5, 3, 7]

root1.DFSelect(function (value, depth) {
  return depth === 1;
}) //=> [2, 3]
*/
