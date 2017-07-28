// Iterates over elements of an array invoking callback for each element. The callback should be passed the element, the current index, and the entire array.
// var callback = function(element, index, array) {
//  console.log(element +"," +index +"," +array);
// }
// forEach(['a','b','c'], callback); → prints a,0,[1,2,3] b,1,[1,2,3] c,2,[1,2,3]
// For each element in the array, the callback we passed is called. The callback can be customized, but in the above example, the callback prints out the element, index, and entire array.
function forEach(array, callback) {
	for (var i = 0; i < array.length; i++) {
		callback(array[i], i, array);
	}
}

// Creates an array of values by running each element in collection through callback
// Should we explain that map returns?
// Callback (element/value, index/key, array)
// map([1,2,3], function(element, index, array) {
//  return element * 3;
// }); -> [3,6,9]
// BONUS: use the forEach method you use to create map
function map(array, callback) {
	var newArr = [];

	forEach(array, function(el) {
    newArr.push(callback(el))
	});
  
  return newArr;
}

// Iterates over elements of collection, returning an Array of all elements callback returns truthy for.
// filter([1,2,3,4], function(element, index, collection) {
//  return element % 2 === 0;
// }); → [2,4]
// filter({a: 1, b: 2,c: 3,d: 4}, function(element, index, collection) {
//  return element % 2 !== 0;
// }); → [1,3]
function filter(collection, callback) {
	var newArr = [];

	forEach(collection, function(el, i, col) {
    if (callback(el, i, col)) {
    	newArr.push(el);
    }
	});
  
  return newArr;	
}

// Removes all elements from array that callback returns truthy for and returning a collection of elements that did not pass the truthy test.
// The returned collection should be the same type that was passed in, either an Array or Object.
// reject([1,2,3,4], function(element, index, collection) {
//  return element % 2 === 0;
// }); → [1,3]
// reject({a:1, b:2, c:3, d:4}, function(value, key, collection) {
//  return value % 2 !== 0;
// }); → {b:2, d:4}
// Challenge: use filter
function reject(collection, callback) {
	if (Array.isArray(collection)) {
		return filter(collection, function(element, index, collection) {
			if (!callback(element, index, collection)) {
				return true;
			}
		});
	} else {
		var newObj = {};

		for (var key in collection) {
		  if (!callback(collection[key])) {
		    newObj[key] = collection[key];
		  }
		}

		return newObj;
	}
}

// Creates an array without duplicate values from the inputted array.
// The order of the array is preserved.
// uniq([1,2,1]); → [1,2]
function uniq(array) {
	//CODE HERE
	return array.filter(function(el, index, arr) {
    return arr.indexOf(el) === index;
	}); 
}

// Gets the index at which the first occurrence of value is found in array
// Returns -1 if element is not in array
// DO NOT USE THE BUILT-IN INDEXOF function
// indexOf([11,22,33], 11); → 0
// indexOf([11,22,33], 5); → -1
function indexOf(array, value) {
	//CODE HERE

	for (var i = 0; i < array.length; i++) {
		if (array[i] === value) {
			return i;
		}
	}

	return -1;
}

// Returns a function that is restricted to invoking func once.
// Repeat calls to the function return the value of the first call.
function once(func) {
	//CODE HERE
	var ran;
  var result;

  return function() {
    if (ran) {
      return result;
    }
    ran = true;
    result = func.apply(this, arguments);

    func = null;
    return result;
  }
}

// Reduces collection to a value which is the accumulated result of running each element in collection through iteratee, where each successive invocation is supplied the return value of the previous. If accumulator is not provided the first element of collection is used as the initial value.
// If a start parameter is not provided, then set the start value as the zeroth index
// reduce([1,2], function(stored,current) {
//  return stored + current;
// }); → 3
// reduce([1,2], function(stored,current) {
//  return stored + current;
// },1); → 4
function reduce(array, callback, start) {
  var accumulator = start || 0;
  
  if (!start && callback(accumulator, array[0]) < 0) {
  	accumulator = array[0] * 2;
  }

  array.forEach(function(el, index, arr) {
    accumulator = callback(accumulator, el);
  });

  return accumulator;
}

// [1, 2, 3]

// Takes an array and a function as arguments.
// Returns true if the function produces true when each array element is passed to it.
// Otherwise it returns false.
// every([2, 4, 6], function(elem) {
//   return elem % 2 == 0;
// });  -> true
// every([2, 4, 7], function(elem) {
//   return elem % 2 == 0;
// });  -> false
// BONUS: use reduce in your answer
function every(array, func) {
  return array.reduce(function(acc, curr) {
		if (!func(curr)) {
		  acc = false;
		}
		return acc;
  }, true); 
}

// Flattens a nested array.
// flatten([1, [2, 3, [4]]]); → [1, 2, 3, [4]]
function flatten(array) {
	return [].concat.apply([], array);
}

// Recursively flattens a nested array.
// flattenDeep([1, [2, 3, [4]]]); → [1, 2, 3, 4]
function flattenDeep(array) {
  var flattened = []; 
  var flattening = function(arr) {
    if (Array.isArray(arr)) {
      for (var i = 0; i < arr.length; i++) {
        flattening(arr[i]); 
      }
    } else {
      flattened.push(arr); 
    }
  }
  flattening(array);
  return flattened;
}
