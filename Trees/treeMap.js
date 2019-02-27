/*
Implement a map method on this Tree class.

Map accepts a mapping function as its only argument.
It traverses the tree, passing each node’s value into the mapping function,
and generates a new tree containing the results.

So map should return a tree with the same structure, and different values,
but it should NOT modify the tree that was passed in.
*/

// Basic tree that stores a value
class Tree {
    constructor(value) {
        this.value = value;
        this.children = [];
    }

    map(callback) {
        const tree = new Tree(callback(this.value));
        for (let i = 0; i < this.children.length; i++) {
            tree.children.push(this.children[i].map(callback));
        }
        return tree;
    }

    // add an immediate child (wrap values in Tree nodes if they're not already)
    addChild(child) {
        if (!child || !(child instanceof Tree)) {
            child = new Tree(child)
        }
        if (!this.isDescendant(child)) {
            this.children.push(child);
        } else {
            throw new Error("That child is already a child of this tree");
        }
        // return the new child node for convenience
        return child;
    }

    // check to see if the provided tree is already a child of this tree or any of its sub trees
    isDescendant(child) {
        if (this.children.indexOf(child) !== -1) {
            // child is an immediate child of this tree
            return true;
        } else {
            for (let i = 0; i < this.children.length; i++) {
                if (this.children[i].isDescendant(child)) {
                    // child is descendant of this tree
                    return true;
                }
            }
            return false;
        }
    }

    // remove an immediate child
    removeChild(child) {
        const index = this.children.indexOf(child);
        if (index !== -1) {
            this.children.splice(index, 1);
        } else {
            throw new Error("That node is not an immediate child of this tree");
        }
    }

}
/*
var input = new Tree(1);
// depth: 1
input.addChild(2);
input.addChild(3);
// depth: 2
input.children[0].addChild(4);
input.children[0].addChild(5);
input.children[1].addChild(6);
input.children[1].addChild(8);
// depth: 3 (sparse)
input.children[0].children[0].addChild(9);
input.children[1].children[1].addChild(10);

var double = function (value) { return value * 2; };
var result = input.map(double);

console.log(result)
*/
