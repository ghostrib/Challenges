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
