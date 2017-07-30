#Lists

##Summary
For this challenge we will implement arrays and linked lists in order to compare them and learn about time complexity. In JavaScript, an array is basically an **object** where the keys happen to be numbers counting up from 0. Arrays also have some handy methods that plain objects don't, e.g. `forEach`, `find`, `join`, etc. We will use an object to recreate the array data type. We will also implement the linked list, another *collection* data type. Linked lists are objects in a sequence via a chain of references, usually called `next`. Once we understand their inner workings we can compare their *time complexity*.

##Time complexity
The whole idea behind time complexity is how long it takes to do something as the inputs increase. Take the example of drying laundry: it takes the same amount of time to air dry 10 shirts in the backyard as it takes to dry 100. This is called constant time; in Big O notation we write this as `O(1)`.

If we were to dry those same shirts in a dryer however, it would take more time the more shirts we put in. If 100 shirts takes 10x longer than 10 shirts this is **linearly** complex. In Big O notation we write this as `O(n)`

##How do I get started?
Fork and clone this repo. The challenges are in the `src` directory. Open the JS files and begin filling in the blank functions.

##Challenges
- **Array**. Get started on the array ones first; the `push` and `pop` methods are already written for you. 
  - [ ] Write the `add` method that places an item at a specific position in the array, *without* overwriting the element that's already there.
  ````
	[1,2,3] -> [1,2,4,3]
  ````
  - [ ] Write the `remove` method that deletes the item at a specific position, *without* leaving an empty hole in there.
  ````
	[1,2,3] -> [1,3]
  ````
  How can you do this without looping through the entire array?

  What's the Big O of looping through an entire array that has *n* elements?

  How can you make the computer do the minimum amount of work possible (smallest Big O)?

- **Linked List**. These ones are similar to the array ones; we need to write methods that allow us to add and remove items. 
Take note that the `add` function can also accept an `index` parameter that allows you to define explicitly where in the linkedlist this element will lie.
  Also, be aware the `index` parameter in the `remove` function is optional. 

  How do you implement this without running through the entire list every time? 

  How do you add an element to the end? What happens if you need to add an element to the middle?

  ![Alt text](https://nitemice.files.wordpress.com/2014/07/midaddani.gif)

  Think about this logically and whiteboard it out before you start writing code on this one.



##How do I test if my answer is correct?
* To test your functions, open `index.html` in your browser ** NOTE: While completing the challenges, if all tests that previously passed ALL suddenly fail, there is most likely a syntax error in your code. Open Chrome Dev Tool's to locate the cause of the error.
* An incredibly useful tool is Chrome Dev Tool's JavaScript Console (which can be opened in Chrome by pressing command+option+J). The console allows for developers to type javascript directly into the browser. Test it out by typing in the following to the console:
````
var a = 'lorem';
console.log(a);
````
You can paste your code into Chrome's JavaScript console and run it in order to test its functionality (and find syntax errors faster!)
