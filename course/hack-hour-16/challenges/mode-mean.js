/*
 * Given an array of numbers, determine if the mode and mean of the array are equivalent
 *
 * Caveats:
 * 	- Math.floor the mean
 * 	- If there are multiple modes, use the max of the modes
 *
 * Return true or false
 *
 */


function modemean(array) {
  var num = 0;
  var count = 1;
  var temp;
  
	for (var i = 0; i < array.length; i++) {
    num += array[i];
  }
  
  var mean = Math.floor(num / array.length);
  
  var mode = {};
  
  for (var i = 0; i < array.length; i++) {
     if (mode[array[i]]) {
       mode[array[i]]++;
     } else {
       mode[array[i]] = 1;
     }
  }
  
  for (var prop in mode) {
    if (mode[prop] > count) {
      count = mode[prop];
      temp = prop;
    }
  }
  
  mode = parseInt(temp);
  
//   console.log(mode);
// 	mode = Object.values(mode).reduce(function(prev, cur) {
//     return prev > cur ? prev : cur;
//   });

  return mean === mode;
}

console.log([3, 4, 1, 7, 45, 13])

module.exports = modemean;
