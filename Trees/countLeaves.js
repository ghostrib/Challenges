/*
Implement the countLeaves function in this Tree class.

A leaf node is any node in the tree that has no children. countLeaves should
traverse the tree, and return the number of leaf nodes the tree contains.

Illustration of a tree with three leaves:

      * <- root
     / \
    *    * <- leaf
   / \
  *   * <- leaf
 /
* <- leaf
Example usage:

var root = new Tree();
root.countLeaves(); // 1
root.addChild(new Tree());
root.countLeaves(); // still 1
root.addChild(new Tree());
root.children[0].addChild(new Tree());
root.children[0].addChild(new Tree());
root.children[0].children[0].addChild(new Tree());
root.countLeaves(); // 3

*/

// ES6 class implementation

class Tree {
    constructor(value) {
        this.value = value;
        this.children = [];
    }

    countLeaves() {
        let count = 0;
        const countChildren = node => {
            if (!node.children.length) {
                count += 1;
            } else {
                node.children.forEach(child => {
                    countChildren(child)
                });
            }
        }
        countChildren(this);
        return count;
    }

    addChild(child) {
        if (!child || !(child instanceof Tree)) child = new Tree(child);
        if (!this.isDescendant(child)) {
            this.children.push(child)
        } else {
            throw new Error('That child is already a child of this tree');
        }
        return child;
    }

    isDescendant(child) {
        if (this.children.indexOf(child) !== -1) return true;
        for (let node of this.children) {
            if (node.isDescendant(child)) return true;
        }
        return false;
    }

    removeChild(child) {
        const index = this.children.indexOf(child);
        if (index !== -1) {
            this.children.splice(index, 1);
        } else {
            throw new Error('That node is not an immediate child of this tree');
        }
    }

}


// var Tree = function (value) {
//     this.value = value;
//     this.children = [];
// };

// // Linear time complexity O(n);

// Tree.prototype.countLeaves = function () {
//     let count = 0;
//     const countChildren = function (node) {
//         if (node.children.length === 0) {
//             count += 1;
//         } else {
//             node.children.forEach(function (child) {
//                 countChildren(child);
//             });
//         }
//     }
//     countChildren(this);
//     return count;
// }

// // add an immediate child
// // (wrap values in Tree nodes if they're not already)
// Tree.prototype.addChild = function (child) {
//     if (!child || !(child instanceof Tree)) {
//         child = new Tree(child);
//     }

//     if (!this.isDescendant(child)) {
//         this.children.push(child);
//     } else {
//         throw new Error("That child is already a child of this tree");
//     }
//     // return the new child node for convenience
//     return child;
// };

// // check to see if the provided tree is already a child of this tree or any of its sub trees
// Tree.prototype.isDescendant = function (child) {
//     if (this.children.indexOf(child) !== -1) {
//         // child is an immediate child of this tree
//         return true;
//     } else {
//         for (var i = 0; i < this.children.length; i++) {
//             if (this.children[i].isDescendant(child)) {
//                 // child is descendant of this tree
//                 return true;
//             }
//         }
//         return false;
//     }
// };

// // remove an immediate child
// Tree.prototype.removeChild = function (child) {
//     var index = this.children.indexOf(child);
//     if (index !== -1) {
//         // remove the child
//         this.children.splice(index, 1);
//     } else {
//         throw new Error("That node is not an immediate child of this tree");
//     }
// };
