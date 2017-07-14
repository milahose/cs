// Challenge 1
function addTwo(num) {
	return num + 2;
}

console.log(addTwo(3));
console.log(addTwo(10));


// Challenge 2
function addS(word) {
	return word + "s";
}

console.log(addS('pizza'));
console.log(addS('bagel'));


// Challenge 3
function map(array, callback) {
	var newArr = [];
  
  for (var i = 0; i < array.length; i++) {
    newArr.push(callback(array[i]));
  }
  
  return newArr;
}

console.log(map([1, 2, 3], addTwo));


// Challenge 4
function forEach(array, callback) {
  for (var i = 0; i < array.length; i++) {
    callback(array[i]);
  }
}


//--------------------------------------------------
// Extension
//--------------------------------------------------

//Extension 1: mapWith()

// Using basic JS
function mapWith(array, callback) {
  var newArr = [];
  
  for (var i = 0; i < array.length; i++) {
    newArr.push(callback(array[i]));
  }
  
  return newArr;
}

// Using an anonymous function: 
function mapWith(array, callback) {
	var newArr = [];
  
  forEach(array, function(el) {
    newArr.push(callback(el))
	});
  
  return newArr;
}

// Using a named closure: 
function mapWith(array, callback) {
  var newArr = [];

  var pushElement = function(el) {
    newArr.push(callback(el))
  }
  
  forEach(array, pushElement);
  
  return newArr;
}


//Extension 2: Reduce()

// Using basic JS
function reduce(array, callback, initialValue) {
  var accumulator = initialValue || 0;

  for (var i = 0; i < array.length; i++) {
    accumulator = callback(accumulator, array[i]);
  }

  return accumulator;
}

// Using native forEach function
function reduce(array, callback, initialValue) {
  var accumulator = initialValue || 0;
  
  forEach(array, function(el) {
    accumulator = callback(accumulator, el);
  });
  
  return accumulator;
}

// Using built-in forEach method
function reduce(array, callback, initialValue) {
  var accumulator = initialValue || 0;
  
  array.forEach(function(el) {
    accumulator = callback(accumulator, el);
  });

  return accumulator;
}


//Extension 3
function intersection(arrays) {

}

console.log(intersection([5, 10, 15, 20], [15, 88, 1, 5, 7], [1, 10, 15, 5, 20]));
// should log: [15, 5]

//Extension 4
function union(arrays) {

}

console.log(union([5, 10, 15], [15, 88, 1, 5, 7], [100, 15, 10, 1, 5]));
// should log: [5, 10, 15, 88, 1, 7, 100]


//--------------------------------------------------
// JSHP: Callbacks Challenge Solution
//--------------------------------------------------

function takeWhile(array, callback) {
  var newArr = [];
  for (var i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      newArr.push(callback(array[i]));
    } else {
      return newArr;
    }
  }
  return newArr;
}


