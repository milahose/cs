#React-Calendar

##Goal
The goal of this challenge would be build your slack application in React.

We will also be introducing a tool that will handle a lot of processes for us:
![alt text](https://avatars0.githubusercontent.com/u/6200624?v=3&s=400)

We will also begin organizing our files into many smaller components, or modules.


We will also be introducing a new build tool called Gulp to help integrate these files. Gulp (covered more in a future challenge) is commonly used in React projects to make it easier to organize the file structure. Notice that the javascript files in the List.js file in client/src files contain the following lines:
````
module.exports = List;
````
and
````
var Header = require('./Header');
````
module.exports makes it possible for other files to access the object List. The require statement imports the object that is passed in module.exports. In the following example, require('./Header') imports the React component that is created in the Header file.

Gulp allows us to work in these compartmentalized files and compiles all of these files into one file, which can found in build/bundle.js. Do not worry too much about how gulp works (configurations are set in the Gulpfile.js file found in the root directory), just know what is it doing in the challenge.

##How do I get started
1. Run the following command into your terminal:
````
npm install
````

2. To compile your React.js files, run the following command in your terminal:
````
npm start
````
Whenever you make changes to any of your React javascript files, gulp will automatically recompile the code and put the code into build/bundle.js.
Open your page by visiting "http://localhost:3000/"

3. Complete the challenge by building your slack application in React. All of your your js files will then be loaded in the build/bundle.js file.

##How do I test if my answer is correct?
Run the following code in your terminal to test your code:
````
npm test
````