function LinkedList() {
  this.head = null;
  this.tail = null;
}

function Node(val) {
  this.value = val;
  this.next = null;
}

// adds node to end of list
LinkedList.prototype.push = function(value) {
	if (this.head === null) {
		this.head = new Node(value);
		this.tail = this.head;
	} else {
		this.tail.next = new Node(value);
		this.tail = this.tail.next;
	}
};

// returns true if value is present in the list
LinkedList.prototype.contains = function(value) {
	var current = this.head;

	while (current) {
		if (current.value === value) {
			return true;
		}
		current = current.next;
	}

	return false;
};

// Bonus
// adds node to beginning of list
LinkedList.prototype.addToHead = function(value) {

};

// Extra Bonus
// insert an item at the position specified
LinkedList.prototype.insert = function(value, position) {

};

// Extra Bonus
// remove first occurrence of value from list
LinkedList.prototype.removeItem = function(value) {

};

// Extra Bonus
// remove element at specified position in list
LinkedList.prototype.removePosition = function(position) {

};
