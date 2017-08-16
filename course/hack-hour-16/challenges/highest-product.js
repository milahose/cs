/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

 // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
 // [6, 12, 24, 40, 45, 56, 60, 67, 78, 84, 89, 90, 126, 144, 168, 178, 180, 216, 267, 270];
 // Take first element and multiply by next 2 

function highestProduct(array) {
	var count;
	var product;
	var current;
	var possibilities = [];

	for (let i = 0; i < array.length - 3; i++) {
		current = array[i];
		console.log(current * array[i + 1] * array[i + 2]);

		// while (count < 2) {
		// 	product = current * array[i + 1] * array[i + 2];
		// 	count++;
		// }

		// possibilities.push(product);
		// count = 0;
	}

	return possibilities;

	// return possibilities.reduce(function(prev, curr) {
	// 	return prev > curr ? prev : curr;
	// });
}


module.exports = highestProduct;