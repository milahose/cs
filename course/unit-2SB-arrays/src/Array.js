// the following constructor function should create an object with a 
// push and pop method do not use the built-in array type or its methods
function Erray() {
  this.contents = {};
  this.length = 0;
}

Erray.prototype.push = function(val) {
  if (arguments.length === 1) {
    this.contents[this.length] = val;
	  this.length++;
  } else if (arguments.length > 1) {
    var args = Array.prototype.slice.call(arguments);
    
    for (var i = 0; i < args.length; i++) {
      this.contents[i] = args[i];
      this.length++;
    }
  }
}

Erray.prototype.pop = function(val) {
	var deletedVal;

	if (this.length === 0) {
		return undefined;
	}

	this.length--;
	deletedVal = this.contents[this.length];
	delete this.contents[this.length];
	return deletedVal;
}

Erray.prototype.unshift = function(val) {
  for (var i = 0; i < this.length; i++) {
    this.contents[i] = this.contents[i++]; 
  }
  
  this.contents[0] = val;
  this.length++;
  return this.contents;
}

Erray.prototype.unshift = function(val) {
  if (this.length === 0) {
    this.contents[this.length] = val;
    this.length++;
    return this.length;
  }
  
  this.length++;
  for (var i = this.length; i > 0; i--) {
    this.contents[i] = this.contents[i - 1];
    this.contents[i - 1] = undefined;
  }
  
  delete this.contents[this.length]
  this.contents[0] = val;
  return this.contents;
}

Erray.prototype.shift = function() {
  var deletedVal = this.contents[0];
  
  if (this.length === 0) {
    return undefined;
  }
  
  for (var i = 0; i < this.length; i++) {
    this.contents[i] = this.contents[i + 1];
  }
  
  delete this.contents[this.length - 1];
  this.length--;
  return deletedVal;
}

var array = new Erray();

