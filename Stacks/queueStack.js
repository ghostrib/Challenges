/*
Write a stack.
Once you’re done, implement a queue using two stacks to create FIFO behavior.
The queue should not have any storage separate from its stacks.
*/

var Stack = function () {
    var storage = [];

    this.push = function (value) {
        storage.push(value)
    };

    this.pop = function () {
        return storage.pop()
    };

    this.size = function () {
        return storage.length
    };
};

