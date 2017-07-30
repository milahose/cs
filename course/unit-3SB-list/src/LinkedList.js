function LinkedList() {
  this.head = null;
  this.tail = null;
}

function Node(value) {
  this.value = value;
  this.next = null;
}

// adds a node to the specified index
// if index is specified, accepts parameter (value, index)
// if no index is specified then add element to the end of list
LinkedList.prototype.add = function(value) {
  if (!this.head) {
    this.head = this.tail = new Node(value);
    return;
  }
  this.tail.next = new Node(value);
  this.tail = this.tail.next;
}

// retrieves the node at the specified index
LinkedList.prototype.get = function(index) {

}

// retrieves and removes the node at the specified index
// if no index is specified, removes the last node (tail)
LinkedList.prototype.remove = function(index) {

}
