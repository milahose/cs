// console.log("Hello World!");

// declare a variable called "numArr" which is an array containing the numbers 1, 2, and 3. then print it to the console

var numArr = [1, 2, 3];
// console.log(numArr);


// define a function "multiplyBy2" that takes one number, multiplies it by 2, and returns that value

function multiplyBy2(num) {
  return num * 2;
}

// console.log(multiplyBy2(8));


// define a function "distanceFrom10" that takes one number and returns its distance from 10. the output should be >= 0 (e.g. passing 8 or 12 should both return a positive 2)

// function distanceFrom10
// input: one number
// output: the distance from the number by 10
// greater than 0

function distanceFrom10(num) {
  if (num < 0) {
    return "Please enter a number greater than 0";
  } else if (num === 10) {
    return 0;
  }
  
  if(num > 10) {
    return num - 10;
  } else if (num < 10) {
    return 10 - num;
  }
}

// console.log(distanceFrom10(10));


// define a function "map" which takes two arguments, an array and a callback function. "map" will iterate/loop through the array and pass each array element to the callback as an argument. Each output from the callback is pushed to a new array. "map" will return this new array. Please do not use the native .map() method.

function map(array, callback) {
  var newArr = [];
  
  for (var i = 0; i < array.length; i++) {
    newArr.push(callback(array[i]));
  }
  
  return newArr;
}

// use your "map" to find the distance from 10 of each number in numArr

// console.log(map(numArr, distanceFrom10));


// define a function called "every" which takes two arguments, an array and a callback function. this callback can be considered a "test", as it will return true or false. "every" will iterate/loop through the array and pass each array element to the callback as an argument. if all outputs from the callback/test are "true", every will return true. if any of the outputs is "false", every will return false. Please do not use the native .every() method.

// input: array and a callback function 
// output: true or false based on if all elements "pass test""

// define a function called every 
// 

// function every(array, callback) {
  
//   for (var i = 0; i < array.length; i++) {
//     if (!callback(array[i])) {
//       return false;
//     }
//   }
  
//   return true;
// }

// use your "every" to determine if every number in numArr is greater than 0. Then, try testing [1, -2, 3]


// console.log(every([1, -2, 3], greaterThan0));

// function greaterThan0(array) {
  
//   for (var i = 0; i < array.length; i++) {
//     if (array[i] < 0) {
//       return false;
//     }
//   }
//   return true;
// }

// console.log(every([1, 2, 3], function(el) {
//   if (el < 0) {
//     return false;
//   }
//   return true;
// }));
           

// refactor "every" so that it uses the built-in "reduce" method instead of a "for" loop.

function every(array, callback) {
  return array.reduce(function(acc, curr) {
	if (!callback(curr)) {
	  acc = false;
	}
	return acc;
  }, true); 
}