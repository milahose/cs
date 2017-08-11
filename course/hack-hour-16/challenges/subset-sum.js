/* You are given an array of integers and a target number. Write a function that returns true if
 * there is a subset of the array that sums up to the target and returns false otherwise. A subset
 * can be any size and the elements do not have to appear consecutively in the array.
 * 
 * subsetSum([3, 7, 4, 2], 5) - > true, 3 + 2 = 5
 * subsetSum([3, 34, 4, 12, 5, 12], 32) -> true, 3 + 12 + 5 + 12 = 32
 * subsetSum([8, 2, 4, 12], 13) -> false
 * subsetSum([8, -2, 1, -3], 6) -> true, 8 + 1 + (-3) = 6
 */

 // Iterate through array
 // For each element, if the value is greater than target, ignore it
 // Else, check to so see if adding the current element to count equals target
 // If not, keep checking

function subsetSum(array, target) {
	var sum;
	var count;
	for (let i = 0; i < array.length; i++) {
		sum = array[i];

		for (let i = 0; i < array.length; i++) {
			if (array[i] < target) {
				if (sum + array[i] <= target) {
					sum += array[i];
				}
			}
		}
	}
}

module.exports = subsearray[i] < count