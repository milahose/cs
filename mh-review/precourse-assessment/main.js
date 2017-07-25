// Do not remove!!!
var assessmentFunctions = {};


/**
* capitalizeVowels
*
* Write a function that takes a string and capitalizes every vowel in it
*
* capitalizeVowels('hella world');  -> 'hEllA wOrld'
*
* @param {String} str - The string to be capitalized
* @return {string} The capitalized string
*/
assessmentFunctions.capitalizeVowels = function(str) {
	var newStr = '';
	var vowels = /^[aeiou]$/i;

	for (var i = 0; i < str.length; i++) {
		if (vowels.test(str[i])) {
			newStr += str[i].toUpperCase();
		} else {
			newStr += str[i];
		}
	}

	return newStr;
};


/**
* reverseChunk
*
* Write a function that takes an array and two integers as arguments. These two 
* numbers will be indeces. All array elements between (and including) these 
* positions should be reversed.
*
* var zeroToTen = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
* reverseChunk(zeroToTen, 2, 6);  -> [0, 1, 6, 5, 4, 3, 2, 7, 8, 9, 10]
* var primes = [2, 3, 5, 7, 11];
* reverseChunk(primes, 1, 4);  -> [2, 11, 7, 5, 3]
*
* @param {Array} arr - The Array to be worked on
* @param {number} start - starting position of the chunked reverse; if provided
*  value is less than 0 then use 0
* @param {number} end - ending position of the chunked reverse; if provided value
*  is greater than or equal to the array length, then use the array length - 1
* @return {Array} The resulting Array
*/
assessmentFunctions.reverseChunk = function(arr, start, end) {
	var first = [];
	var middle = [];
	var last = []
	var result = [];

	if (start < 0) {
		start = 0;
	} else if (end >= arr.length) {
		end = arr.length - 1;
	}

	// first
	for (var i = 0; i < start; i++) {
		first.push(arr[i]);
	}

	// middle
	for (var i = end; i >= start; i--) {
		if (arr[i] >= start && arr[i]) {
			middle.push(arr[i]);
		}
	}

	for (var i = end + 1; i < arr.length; i++) {
		last.push(arr[i]);
	}

	result = result.concat(first, middle, last);

	console.log(first);
	console.log(middle);
	console.log(last);

	return result; 
};


/**
* snakeToCamel
*
* Write a function that takes a string and converts it from snake case to camel
* case.
*
* Your function should be able to handle underscores at the beginning or end
* of the string as well. If the underscore is the last character it should still
* not be present on the resulting string.
*
* snake case: words_separated_by_underscores
* camel case: wordsSeparatedByCapitals
* snakeToCamel("hello_there_world");  -> "helloThereWorld"
* snakeToCamel("_hello_there_world");  -> "HelloThereWorld"
*
* @param {String} str - The string to be camel cased
* @return {string} The resulting camel case string
*/
assessmentFunctions.snakeToCamel = function(str) {
	var newStr = str.replace(/_/g, " ").split("");

	for (var i = 0; i < newStr.length; i++) {
		if (newStr[i] === " ") {
			newStr[i + 1] = newStr[i + 1].toUpperCase();
			newStr.splice(i, 1);
		}
	}

	newStr[0] = newStr[0].toLowerCase();

	return newStr.join("").trim();
};


/**
* objToSortedArray
*
* Write a function that takes an object and returns a nested array. These inner
* arrays will each have two elements: the key-value pairs from the object. These
* whole array should be sorted in alphabetical order by the key names.
*
* var phoneNums = {
*   chris: 3429588375,
*   andy: 4829574932,
*   mildew: 9975723073
* }
* objToSortedArray(phoneNums);  -> [ ['andy', 4829574932],
*                                    ['chris', 3429588375],
*                                    ['mildew', 9975723073] ]
*
* @param {Object} obj - An Object containing key-value pairs
* @return {Array} An Array containing nested Arrays, each one of which has a key
*  value pair from the original Object. These nested arrays should be sorted.
*/
assessmentFunctions.objToSortedArray = function(obj) {
	var arr = [];

	for (var prop in obj) {
		arr.push([prop, obj[prop]]);
	}

	return arr.sort();
};


// Do not remove!!!
module.exports = assessmentFunctions;
