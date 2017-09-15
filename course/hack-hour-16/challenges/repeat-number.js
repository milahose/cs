/**
 * I have an array where every number in the range 1...n appears once except for 
 * one number which appears twice.
 *
 * Write a function for finding the number that appears twice.
 *
 * BONUS:
 * Do this in O(n) time
 * Do this in O(1) space
 *
 */

function repeatNumbers(array) {
  var repeatedNum = 0;

  for (let i = 1; i < array.length; i++) {
    if (array[i] === repeatedNum[i]) {
      repeatedNum[i]++;
    }
    repeatedNum[i] = 1;
    console.log(repeatedNum);
  }

  return repeatedNum;
}

repeatNumbers([1, 2, 3, 4, 5, 6, 7, 8, 4]);
    
module.exports = repeatNumbers;
    