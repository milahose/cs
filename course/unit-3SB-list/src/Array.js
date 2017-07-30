// JavaScript lets you do this to create an Array
// var arr = [1, 2, 3];
// That is just a prettier way to do this.
// var arr = new Array(1, 2, 3);
// "Array" is actually a built-in constructor function. For this challenge we'll be implementing our own
// version. Erray will be a constructor function for objects similar to Arrays.

function Erray() {
  this.storage = {};
  this.index = 0;
}

Erray.prototype.push = function(value) {
  this.storage[this.index++] = value;
}

Erray.prototype.pop = function() {
  return this.storage[--this.index];
}

Erray.prototype.get = function(index) {
  return this.storage[index];
}


// adds an element at the index specified
// moves all elements after inserted element forward one index
// do not use the native splice method
Erray.prototype.add = function(index, value) {

}

// removes an element from the index
// moves all elements after delete element back one index
// do not use the native splice method
Erray.prototype.remove = function(index) {

}