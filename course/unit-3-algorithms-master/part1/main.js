/**
 *  returns true if string is a palindrome (the string is the same forward and backwards). The parameters entered may have puncutations and symbols, but they should not affect whether the string is a palindrome
 *  palindrome("Anne, I vote more cars race Rome-to-Vienna"); -> true
 *  palindrome("llama mall"); -> true
 *  palindrome("jmoney"); -> false
 */
function palindrome(string) {

}

/**
 * returns true is the input is prime.
 * isPrime(1); -> false
 * isPrime(2); -> true
 * isPrime(3); -> true
 * isPrime(4); -> false
 */
function isPrime(num) {

}

/** returns the nth fibonacci number. A Fibonnaci sequence is a list of numbers that begin with 0 and 1, and each subsequent number is the sum of the previous two
 * nthFibonacci(0); -> 0
 * nthFibonacci(1); -> 1
 * nthFibonacci(2); -> 1
 * nthFibonacci(3); -> 2
 * nthFibonacci(4); -> 3
 * Try to use recursion. What is the time complexity? Are you repeating the same function call with the 
 * same arguments frequently? Are you able to compute nthFibonacci(1000)? If not, recursive algorithms can be 
 * made MUCH more efficient using memoization. Try memoizing each result from nthFibonacci and see the 
 * performance difference.
 */
function nthFibonacci(num) {

}

/** returns a function with a context bound to this
 * const matt = {
 *  name: 'matt',
 *  shout: function() {
 *      alert(this.name);
 *  }
 * };
 * let boundShout = bind(matt.shout, matt); 
 * boundShout(); -> alerts 'matt;
 * boundShout = bind(matt.shout, {name: 'kim'});
 * boundShout(); -> alerts 'kim'
 */
function functionBind(func, context) {
    
}

/**
 * returns every sequence of throws a single player could throw over a three-round game of rock-paper-scissors
 * rockPaperScissors(1); -> [['rock'],['paper'],['scissors']]
 * rockPaperScissors(2); -> 
 * [['rock','rock'],['rock','paper'],['rock','scissors'],
 * ['paper','paper'],['paper','scissors'],['paper','rock'],
 * ['scissors','scissors'],['scissors','paper'],['scissors','rock']]
 */
function rockPaperScissors(num) {
    
}

function insertionSort(array) {
    
}

function bubbleSort(array) {
    
}

function mergeSort(array) {
    
}
