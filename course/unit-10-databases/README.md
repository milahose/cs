# Databases

## Summary
This is your last challenge! You will be working with two of the most popular databases - **MongoDB** and **PostgreSQL**. You will be writing a script that saves that content of the project-slack API into a database. You will be interacting with raw queries (through drivers powered by Node), and then ORMs. We'll then set up a basic server that sends this data through HTTP.

### Learning Goals
- [ ] Be able to connect, read, and write to databases.
- [ ] Interact with databases in the shell.
- [ ] Understand the function of ORMs.
- [ ] Integrate a database with a web server in an MVC pattern.

### RDBMS
![](http://www.databasejournal.com/img/2009/02/ds_simpleDB_image001.jpg)

Relational Databases are the traditional data management system where data is stored in tables and tables can be related to one another. Data is organized into tables, with a predefined set of columns that describe the data that will be inserted into the table - a mapping called a Schema. Data is often related to one another (a Class object for example, would contain many Student objects). When storing the Class data, instead of storing saving the Class with all the Students, the Class only saves a reference (or primary key) to the students. That way, if two classes contained the same students, and you needed to update information update a student, you will not need to make the modification to all the classes. Instead you would just modify the student, and the two classes (which only contain a primary key to the student) would not need to be modified. However, generating a result might be the result of many queries (since you would first need to query the class and then query the students in the class).

### NoSQL
![](http://docs.couchbase.com/developer/dev-guide-3.0/images/relational_vs_doc1.png)
There are many types of NoSQL databases. The most popular is MongoDB, a document data store. The main difference between a document based data management system and a table based one, is the lack of a structure and schema. Tables are predefined at creation to have a set number of columns that can describe the data. It is often difficult to modify a table once it has been created. Documents on the other hand do not mandate a certain structure, and therefore it is a lot easier to add properties as needed.

### Object Relation Mapping (ORM)
![](https://camo.githubusercontent.com/30d0fe841bf6f0f3949d646d924cb29814e85c8b/68747470733a2f2f646c2e64726f70626f7875736572636f6e74656e742e636f6d2f752f31393431363436392f6f726d2e706e67)
ORMs are very popular abstractions that that are an interface between the developer and the database. Developers don't normally interact directly with the database (they do not normally type SQL commands). Because there are many different server-side languages that need to interact with databases, developers created modules that would all connect databases with the language (and models) they were most familiar with.

We will be working with two of the most popular Node.js ORMs ([Mongoose](https://github.com/Automattic/mongoose) and [Sequelize](https://github.com/sequelize/sequelize)) to interact with our MongoDB database and PostgreSQL database.

### Installing the databases (if not already installed on machine)

## Mongodb
 ## Install on Mac OSX with homebrew
 **Note:** If any of the above give you a permissions error, run each command with 'sudo' prepended before the command and      then enter in your system credentials.
 - Run `brew update` on terminal
 - Run `brew install` mongodb
 - Create '/data/db' directory: `mkdir -p /data/db`
 - Run `mongod` to start your mongod process.
 - To run mongo CLI: run `mongo` in terminal
 - For mongo CLI commands, visit: https://docs.mongodb.com/manual/reference/mongo-shell/
 
## PostgreSQL
 ## Install on Mac OSX with homebrew
  **Note:** If any of the above give you a permissions error, run each command with 'sudo' prepended before the command and   then enter in your system credentials.
 - Run `brew update` on terminal
 - Run `brew install postgres`
 - Run `psql postgres` to enter psql CLI for the first time
 - Run `\du` to see a list of postgres users. You should see a list of default users, who are superusers (they have access to anything)
 - To create a postgres user with password, run `create role <username> with login password <password>`
 - To manually create a postgres database from terminal, run: `createdb <database_name>`
 - To give permission to a certain user, run `grant all privileges on database <database_name> to <username>`. You must be logged in as a superuser to do this
 - To interact with a postgres database, run `psql <database_name>`
 - For additional notes on creating a user and/or a database, see: https://www.codementor.io/devops/tutorial/getting-started-postgresql-server-mac-osx

## Part-1: Save-data
There are **four sections** to this challenge. Two will use MongoDB and two will use PostgreSQL. We'll use each one with an ORM and without (i.e. raw).

### Setup
- [ ] Run `npm install` to install server-side dependencies
- [ ] Take a look at the `scripts` section in the `package.json`. There is a custom npm command, `db`, to start each of the four sections of this challenge:
```
npm run db <database-name>
```
The database names for the four sections are:

1. mongodb-raw
2. mongodb-orm
3. postgresql-raw
4. postgresql-orm

`npm run db mongodb-raw` runs the function in the `./mongodb/mongodb-raw.js` file

`npm run db mongodb-orm` runs the function in the `./mongodb/mongodb-orm.js` file

`npm run db postgresql-raw` runs the function in the `./postgresql/postgresql-raw.js` file

`npm run db postgresql-orm` runs the function in the `./postgresql/postgresql-orm.js` file

### Testing
- [ ] Use the `npm test` command to run the test suite.
- [ ] You will also be using the CLI (or shell) to verify is your data has successfully been saved to your database
- [ ] To run the MongoDB CLI, first start the MongoDB shell with the following line:
```
mongo <database name>
```
- [ ] To run the PostgreSQL CLI, run the following line:
```
psql -d <database name>
```
- [ ] It will then prompt you for a password. Below is the pertinent information:
```
user: student
password: ilovetesting
```

### MongoDB
We don't need to save every single bit of data from out calendar API. We only need to following fields:

|Property|Type  |
|--------|------|
|id      |string|
|summary |string|
|htmlLink|string|
|sequence|number|
|created |date  |
|updated |date  |
|start   |date  |
|end     |date  |

Extract this information from each object from the API.

**Note:** In addition to the **id** that comes from the API, MongoDB also automatically generates an **_id** property. This field is used internally by MongoDB for *indexing* which provides high-performance read operations.

#### mongodb-raw
- [ ] We will be using [Node's MongoDb driver](https://github.com/mongodb/node-mongodb-native) to interact with our API. This allows us to connect to the database and run queries on it. Some ORMs, such as mongoose, actually depend on this module for the connection.
- [ ] Use the node-mongo-native module to save your event data to your database and verify that your data has successfully saved to your local version of MongoDB by checking the data in the MongoDB shell.
- [ ] Run `npm test` to see if it passes.

#### mongodb-orm
- [ ] We will be using [mongoose](http://mongoosejs.com/docs/) as our MongoDB ORM. Mongoose is one of the most popular MongoDB ORMs because of its feature to follow a Schema.
```javascript
var Data = new Schema({
  title: String,
  author: String
});
```
- [ ] Set up your mongoose schema to best fit your data. Similar to the previous section, save the data to your database and verify that it is saved in the shell. Run the tests afterwards.

### PostgreSQL
Save the following fields to your Postgres database:

|Property  |Type              |
|----------|------------------|
|_id       |serial primary key|
|id        |varchar           |
|summary   |varchar           |
|htmlLink  |varchar           |
|sequence  |integer           |
|createdAt |date              |
|updatedAt |date              |
|start     |date              |
|end       |date              |

**Note:** Again, we have the **id** field from the API, but we want to give each row an **_id** as well. This should be a primary key, used internally by the Postgres database. It should also be assigned automatically (i.e. auto-increment) which can be done by making its datatype **SERIAL** instead of INTEGER. Be warned: TEXT and VARCHAR are not the same thing!

#### postgresql-raw
- [ ] We will now be working with PostgreSQL. We'll use [Node's postgres driver](https://github.com/brianc/node-postgres) to connect to our database.
- [ ] Use SQL commands to save your event data into the PostgreSQL database. Be sure to use SQL to **create the tables before** trying to add rows. The databases should already be created on the workstations (you'll need to do this if working on your own computer). Remember the `CREATE TABLE` command. In fact, you might want to look into `CREATE TABLE IF NOT EXISTS` if you want your code to avoid trying to create a table that already exists.
- [ ] Verify that your data has successfully saved to your local version of PostgreSQL by checking the data in the PostgreSQL shell.
- [ ] Run `npm test` to see if it passes.

#### postgresql-orm
- [ ] We will be using another popular SQL ORM [Sequelize](http://docs.sequelizejs.com/en/latest/docs/getting-started/)(which works with PostgreSQL, SQLite, MySQL, and more). One of the features of Sequelize is the ability to perform [raw SQL queries](http://docs.sequelizejs.com/en/latest/docs/raw-queries/) on the database.
```javascript
sequelize.query('SELECT * from "users"')
```
However, its JavaScript methods that allow you to avoid writing any SQL are what makes it an attractive module. You can do this be declaring models and calling methods on this model to do nearly everything you need, including creating tables.
```javascript
var User = sequelize.define('user', {
  username: Sequelize.STRING,
  birthday: Sequelize.DATE
});

sequelize.sync()
```
- [ ] Declare models for your API and save them to the database. Be sure to verify that the data is saved in the shell. Then run `npm test`.

## Part-2: Server
How do databases fit into a web server? In the MVC architecture, all the code involved with the database is in the "model". This challenge will show you how to organize your server-side code into MVC. It is divided into **two sections**, server-sql and server-mongoose. Both of these servers will have the exact same requirements and same tests.

### Setup
You should already have the dependencies by running,
```
npm install
```
Edit the files in the `server-sql` for the first section and then `server-mongoose` for the second section. Get both servers to pass the tests. Be sure to observe the organization of the files.

### Testing
Run the following to test your servers:
```
npm run test-server
```
The tests are located in `test/server.js`. Check the tests for exact specs on how this server should work.

### Challenge
Each server should respond with JSON to the following routes:
```
GET /events
GET /event/:id
```
#### GET /events
This should query all events from the database and return them as an array of objects (each event is an object). In addition, we would like to perform some more specific queries from this same route. Suppose we want to query by sequence number. If a **query string** is passed, e.g. `GET /events?sequence=1`, it should return only the events whose sequence field equals 1 instead of all the events. Don't worry, ExpressJS makes working with query strings easy. Research how to access this in Express.

#### GET /event/:id
This should return a single event object. The actual request will look something like this `GET /event/526gd0qob6hk4so1eicspvboq4` where `:id` is a placeholder for the **id** of the particular event they are requesting. It's kind of like a *variable* in your URL. This is what would be returned:
```javascript
{
  "_id": /*whatever it is*/,
  "id": "526gd0qob6hk4so1eicspvboq4",
  "summary": "Cocoa",
  "htmlLink": "https://calendar.google.com/calendar/event?eid=NTI2Z2QwcW9iNmhrNHNvMWVpY3NwdmJvcTQgY29kZXNtaXRoLmlvXzk3MjZsdWtrdXJrdGtpZTd2NnVnMm1lbWVvQGc",
  "sequence": 1,
  "start": "2016-01-18 20:30:00-08",
  "end": "2016-01-18 20:45:00-08",
  "createdAt": "2016-01-17 15:53:11-08",
  "updatedAt": "2016-01-17 16:14:25.024-08"
}
```
Like with query strings, Express is designed to make working with wildcards in your URL (a.k.a params) very easy. Look up How to handle params in a URL with express.

### server-sql
Build a server that uses SQL to provide these data via HTTP. This server will utilize the node-postgres driver and the postgresql-raw database.

### server-mongoose
Now build a server that uses mongoose to provide these data over HTTP. This time the mongodb-orm database will be used. Notice how the model is declared in a **separate file**. This model is exported to the controller which is simply calling methods on this model to get the data. This is an example of *separation of concerns*. The model handles the details of database queries and exposes methods to the controller. The controller is responsible for handling HTTP requests and responses.

## Extension
- [ ] For server-sql did you write SQL inside your controller? If so, perhaps you can organize your code more like the server-mongoose and achieve better separation of concerns. Move your SQL queries into the model file and place them in methods that can be effortlessly called by the controller.
- [ ] Add a route to your server `POST /events` that will create a new event in the database.
- [ ] Save you data into [Redis](http://redis.io/). You will need to install and configure Redis on your own machine.
- [ ] Developers love to manipulate their database data in the terminal (`mongo`, `psql`). There have been many GUIs developed to help database admins visualize the content saved on their database without having to interact with the terminal. Set up [Express Mongo](https://github.com/andzdroid/mongo-express) and use it to visual your database
- [ ] Visualize your PostgreSQL data with [pgAdmin](http://www.pgadmin.org/)

## Resources and link
- [https://github.com/mongodb/node-mongodb-native](https://github.com/mongodb/node-mongodb-native)
- [http://mongoosejs.com/docs/](http://mongoosejs.com/docs/)
- [https://github.com/brianc/node-postgres](https://github.com/brianc/node-postgres)
- [http://docs.sequelizejs.com/en/latest/](http://docs.sequelizejs.com/en/latest/)
