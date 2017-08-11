# Node Server

##Summary

In this unit you will write code to create the backend (server) of your chat application you previously built with React.

---

## Learning Goals

* Learning what a server is and does
* Understand Node.js and how to use it to interpret the request object and develop a response
* Handle different types of requests from the client
* Connect your server to a MongoDB database

---

## What is a server?

A web server is a computer that we can access over the internet at a particular address. Our browser (the 'client') makes requests that are routed to our server (via a [DNS](http://www.dashsystems.com/tip_dns-explanation.cfm)). An example request would be to return cnn.com's homepage or the latest 10 tweets. The server should return whatever was requested *back* to our computer

As software engineers writing server-side (or 'backend') code, it's our task to interpret that request and decide what the right response is - either sending the appropriate files (e.g. index.html) or even rejecting the request if it doesn't include the correct credentials (like a password)

![](https://www.dropbox.com/s/ms1znzj076n0oq3/server%20client.png?dl=1)

## What is Node?

Node allows us to create a server and write the server-side code (to interpret requests and generate responses) *in JavaScript*. It is a full JavaScript runtime built around the V8 JavaScript engine. Node gives us lots of functionality that a server needs including:

1. Communicate with the internet to receive requests
2. Understand network communications that use HTTP standard (provided by the [http module](https://nodejs.org/api/http.html))
2. Communicate with our computer's filesystem or a database (provided by the [fs module](https://nodejs.org/api/fs.html))
4. Can send out responses over the network
5. Convert JavaScript into something our computer understands (provided by the [V8 engine](https://code.google.com/p/v8/))

This functionality is not all automatically available when we run Node. For example, we must 'require' in the http module to use the http functionality

## What is MongoDB?

[MongoDB](http://mongoosejs.com/docs/guide.html) is a database. There are many databases we could use such as mysql. We provide the necessary Mongo code for you - we will delve into databases and MongoDB deeper in Unit 12

We are going to use MongoDB to store your chatroom messages.

## What is Mongoose?

Mongoose is a library that makes it easy for javascript to interact with MongoDB.

Inside [```server/message/messageModel.js```](./server/message/messageModel.js) is the ["schema"](https://en.wikipedia.org/wiki/Database_schema) for the messages.

A schema is an expectation for how our data should look before we save it to the database. Here is a sample schema relating to how one would save a Person to a database:
![alt text](http://slick.typesafe.com/doc/2.1.0/_images/from-sql-to-slick.person-address.png)

The database requires that a Person have an ID, Name, Age, and Address. Looking inside at our [Message Schema](./server/message/messageModel.js), which properties do we require?

## What is our server going to do?

Our server's purpose is to accept requests (GET and POST) from our browser (the 'client') for chat messages stored on our database. We need to then write code to access (to fetch or input) our messages from our database and send them as a response to the browser (the 'client')

---

## Things to look out for

* Be thoughtful about when your callback arguments get populated - remember JavaScript is asynchronous
* Be prepared to investigate the body of the post message - you may need to spend some time researching how to access it
* Make sure you understand what role the `return` keyword plays when it comes to servers.

---

## Challenges


#### Set Up ('installation' instructions)

- [ ] Make sure all previous work is committed:
```
git status
git add .
git commit -m "Ready for unit 8. Bring on the Node."
```
- [ ] Fetch this branch:
```
git fetch upstream unit-8-node-calendar:unit-8-node-calendar
```
  - Note: this command copies the changes from the unit-8-node-calendar branch in your **upstream** remote link (which should be CodesmithLLC) to a new branch in your local repository named unit-8-node-calendar.

- [ ] Checkout the new branch:
```
git checkout unit-8-node-calendar
```
- [ ] Make sure you successfully checked out the new branch:
```
git branch
```
Should be on the unit-8-node-calendar branch

- [ ] Install your npm dependencies:
```
npm install
```

To start your node server (and compile your React.js files), run the following command:
```
npm start
```

```npm start``` is actually a npm script - it really runs the following command (you can look inside package.json):
```
node server/server.js
```

To 'access' your server in the browser, visit
```
http://localhost:3000/
```

Right now, if you use the Chat Component to talk to your cohortmates, you will see in the source code that the Chat Component is programmed to communicate directly with the remote elasticbeanstalk server, thereby bypassing the local server after the local server has served the React application to the client. The goal of this challenge is to implement a Node server that will interact on the client's behalf with the remote elasticbeanstalk server, so the client will post to the local server instead of posting directly to the elasticbeanstalk server. The client should also get messages from the local server instead of getting them directly from the elasticbeanstalk server. This creates a layer where your local (Node) server will be the only one communicating with the client, and it will also be the only one communicated with by the remote elasticbeanstalk server. This system design allows you to have full control to change/update the user experience of the client in the event that you need to (perhaps to account for a change out of our control, like an update in how the remote server works).

Work on your server-side code and run tests on them. When they are passing the tests, change the client code and make any necessary server-side changes to allow your React application to get and post messages to the elasticbeanstalk server through your Node server.

To test if your code is correct, run the following command in your terminal:
```
npm test
```

**Important** Not all challenges here are checked by the tests - for some you will have to assess the functionality yourselves. If tests are consistently timing out, you can run tests on the mock database provided. (Instructions on how to switch to the mock database are in the messageController and node-chatroom-test files. Extension problems may not work on the mock database.)

#### Creating your routes

1. [ ] Add a route inside the http callback that looks for GET requests to ```/messages```
1. [ ] Pass the request and response object to the method messageController.getMessages
1. [ ] If messages are successfully retrieved from the MongoDB database, pass back the results to the client using the response object
1. [ ] Add a route inside the http callback that looks for POST requests to ```/messages```
1. [ ] Pass the request and response object to the method messageController.postMessage
1. [ ] The POST request to ```/messages``` contains the message that should be saved to the database. Investigate how to access the body of the POST message
1. [ ] When you have access to the the message that should be saved, save the message to [MongoDB](http://mongoosejs.com/docs/) and return a 200 status code to the client if the save was successful.

####Extension Challenges

1. [ ] Have you server check the headers and ensure that the client provides the correct authentication token before allowing them to `GET` or `POST` messages. If they do not provide the correct token, then a 401 status code should be returned.

1. [ ] Add a parameter that will allow the client to query the data in different forms:
  - [ ] the client can optionally request the data sorted in terms of recency (increasing and decreasing recency)
  - [ ] the client can specify a time range of messages
  - [ ] the client can specify messages from a specific user

1. [ ] Create a feature that allows the user to edit previous messages with a `PUT` request

1. [ ] Re-implement your chat application to work with sockets. Sockets allow for persistent connections between the client and server. Data can be pushed from the server to the client, eliminating the need for the client to poll for most recent messages. [Socket.io](http://socket.io/) is the most popular socket library.
  - [ ] Add a listener on the client side that will wait for data from the server
  - [ ] Create a method that on the server that polls the database for new messages (you will need to implement a feature to detect if there are new messages in the database). If new messages are found, the new messages will be pushed to the client

## Links and Resources
* <https://nodejs.org/en/docs/>
* <https://nodejs.org/api/fs.html>
* <https://nodejs.org/api/http.html>
* <https://code.google.com/p/v8/>
* <http://blog.modulus.io/absolute-beginners-guide-to-nodejs>
* <http://www.toptal.com/nodejs/why-the-hell-would-i-use-node-js>
