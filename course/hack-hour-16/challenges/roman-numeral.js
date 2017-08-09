/* Given a positive integer, return it as a string in Roman Numeral form.
 * Some basic conversions are given below:
 *
 *      1     ->    I
 *      4     ->    IV
 *      5     ->    V
 *      9     ->    IX
 *      10    ->    X
 *      40    ->    XL
 *      50    ->    L
 *      90    ->    XC
 *      100   ->    C
 *      400   ->    CD
 *      500   ->    D
 *      900   ->    CM
 *      1000  ->    M
 * 
 */

function romanNumeral(n) {
	var obj = {
    "1000": "M",
    "900": "CM",
    "500": "D",
    "400": "CD",
    "100": "C",
    "90": "XC",
    "50": "L",
    "40": "XL",
    "10": "X",
    "9": "IX",
    "5": "IX",
    "4": "IV", 
    "1": "I",
	};

	var nStr = String(n);
	var count = nStr.length;
	var tens = Math.floor(n / 10);
	var fives = Math.floor((n - (tens * 10)) / 5);
	var ones = n - ((tens * 10) + (fives * 5));
	var romanNumeral = "";

	for (var prop in obj) {
		if ()
	}

}

module.exports = romanNumeral;
