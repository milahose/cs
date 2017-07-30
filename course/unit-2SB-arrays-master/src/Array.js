// the following constructor function should create an object with a 
// push and pop method do not use the built-in array type or its methods
function Erray() {
  this.contents = {};
  this.length = 0;
  this.push = function(el) {
  	this[this.length] = el;
  	return this;
  }

}

var array = new Erray;

// function push(array, el) {
// 	array[array.length] = el;
// 	return array.length;
// }