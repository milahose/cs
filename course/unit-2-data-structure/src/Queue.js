// do not use any native array methods
function Queue() {
	this.storage = {};
	this.index = 0; 
	this.counter = 0;
}

Queue.prototype.enqueue = function(value) {
	this.storage[this.index] = value;
	this.index++;
};

Queue.prototype.dequeue = function(value) {
	var deletedValue;

	if (this.counter === this.index) {
		return undefined;
	}

	deletedValue = this.storage[this.counter];
	delete this.storage[this.counter];
	this.counter++;
	return deletedValue;
};
