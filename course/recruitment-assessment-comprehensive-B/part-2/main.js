function Stack() {
  this.contents = {};
  this.length = 0;
}

Stack.prototype.push = function(value) {
	this.storage[this.length] = value;
  this.length++;
};

Stack.prototype.pop = function() {
	var deletedValue; 
	if (this.length === 0) return undefined;
  this.length--;
	deletedValue = this.storage[this.length];
	delete this.storage[this.length];
	return deletedValue;
};

Stack.prototype.forEach = function(callback) {
	while(this.length) {
		callback(this.storage[this.length]);
		delete this.storage[this.length];
		this.length--;
	}
};


function Queue() {
  this.stack1 = new Stack;
  this.stack2 = new Stack;
}

Queue.prototype.enqueue = function(value) {
	this.storage[this.length] = value;
	this.index++;
};

Queue.prototype.dequeue = function() {
	var toDelete = this.length - (this.length - 1);
	delete this.storage[toDelete];
	toDelete++;
	return deletedValue;
};


module.exports = { Stack, Queue };
