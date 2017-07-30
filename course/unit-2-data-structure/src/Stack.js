// do not use any native array methods
function Stack() {
  this.storage = {};
  this.index = 0;
}

Stack.prototype.push = function(value) {
	this.storage[this.index] = value;
	this.index++;
};

Stack.prototype.pop = function() {
	var deletedValue; 

	if (this.index === 0) {
		return undefined;
	}

	this.index--;
	deletedValue = this.storage[this.index];
	delete this.storage[this.index];
	return deletedValue;
};
