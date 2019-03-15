var Node = function (value) {
    this.value = value;
    this.next = null;
};

var LinkedList = function (initialValue) {
    this.head = new Node(initialValue);
    this.tail = this.head;
};


