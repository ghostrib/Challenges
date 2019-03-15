var Node = function (value) {
    this.value = value;
    this.next = null;
};

var LinkedList = function (initialValue) {
    this.head = new Node(initialValue);
    this.tail = this.head;
};

LinkedList.prototype.addToTail = function (value) {
    this.tail.next = new Node(value);
    this.tail = this.tail.next;
    if (!this.head.value) this.head = this.tail;
};

LinkedList.prototype.removeHead = function () {
    this.head = this.head.next;
    if (!this.head) this.tail = null;
};

LinkedList.prototype.contains = function (value) {
    var node = this.head;
    while (node) {
        if (node.value === value) return true;
        node = node.next
    }
    return false;
};