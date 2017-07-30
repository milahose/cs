/* Write a function that console logs a staircase of any given height where 1 <= N <= 100.
 The staircase must climb up from left to right. The last line should only consist of asterisks,
 without any leading/trailing spaces.
 
 For example:     
 drawStairs(6) ->          
     *
    **
   ***
  ****
 *****
******

*/

function drawStairs(n) {
	var str = "";
	var space = " ";
	var count = 0;
	var master = "";

	if (n > 100) {
		return "Please enter a number less than or equal to 100";
	}

	while (count < n) {
		space += " ";
		count++;
	}

	for (var i = 0; i < n; i++) {
		space = space.slice(0, -1);
		str += "*";
		master += (space + str)
		master += "\n";
	}
	console.log(master)
}


module.exports = drawStairs;
