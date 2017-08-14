# Manhunt

# Set up and Installation

## Mac users run `sh setup.sh`


`npm install` 

## Windows users see 
<https://c9.io/>

Make a new workspace setup using node (login with your github account)

In the terminal on cloud 9, clone this repo: (make sure to use the http link)

then run these commands in order:

`sudo service postgresql start`

`sudo sudo -u postgres createdb world`

`sudo sudo -u postgres psql world -f ./world.sql`

`sudo sudo -u postgres psql`

at the prompt type `\password`

type "pw" (with no quotes) and hit enter

type "pw" (with no quotes) and hit enter

then type `\q` to quit

change line 2 of `fugitive.js` to `var conString = "postgres://postgres:pw@localhost/world";`




Linux users, `sudo apt-get update`

`sudo apt-get install postgresql postgresql-contrib`

#After!
Connect and open the database with `psql world` (windows users on cloud9  `sudo sudo -u postgres psql world`)

This should connect us to a postgresql prompt where we can run different queries. 

Try typing `\d` to see a list of the different tables. 

Then try seeing what a specific table looks like by typing `\d TABLE_NAME`

We can always quit out of here by typing `\q`. 

We can type `?` to get help on querys too

# Next steps

We're going to use what we've learned already about searching with SQL commands, and apply it – to chase down and capture an elusive fugitive.

(I found a great cheat sheet if this is all new to you <http://www.cheat-sheets.org/saved-copy/sqlcheetsheet.gif>)

Follow the clues, **write down both the commands you used and the actual answers.**

# Testing
There are tests written to check if your querys are correct - write your solutions as text strings in the `query.js` file in order to have them tested.

Note: Unlike other challenges, please do NOT read the test file for this one as it will give away the answers.


## The Chase

**Clue #1:** We recently got word that someone fitting the fugitve's description has been traveling through Eastern Europe. He's someplace where he won't be noticed, so find the least populated country in Eastern  Europe, and we'll start looking for him there.

```SQL
-- YOUR SQL QUERY GOES HERE
```
**Answer:**

**Clue #2:** Now that we're here, we have insight that the fugitive was seen attending language classes in this country's officially recognized language. Check our databases and find out what language is spoken in this country, so we can call in a translator to work with you.

Make your query return the Countrys language, and its official status!

```SQL
-- YOUR SQL QUERY GOES HERE
```
**Answer:**

**Clue #3:** We have new news on the classes the fugitive attended – our agent tell us he's moved on to a different country, a country where at least 90% of people speak the language he was learning. 

Make your query return the `countrycode` and the percentage as well as the country name
```SQL
-- YOUR SQL QUERY GOES HERE
```
**Answer:**

**Clue #4:** We're booking the first flight out – maybe we've actually got a chance to catch him this time. There are only a few cities in this country, and our information says that he's hiding out in the smallest one to get away.

```SQL
-- YOUR SQL QUERY GOES HERE
```
**Answer:**

**Clue #5:** Oh no, he pulled a switch – there are two cities with very similar names, but in totally different parts of the globe! He's headed to South America as we speak; go find a city whose name is *like* the one we were headed to, but doesn't end the same. Only the first three letters are a match. Find out the city:

(Hint: It's only one letter longer!)
Google SQL wildcards for a tip

```SQL
-- YOUR SQL QUERY GOES HERE
```
**Answer:**

**Clue #6:** We're close! Our South American agent says he just got a taxi at the airport and is headed towards the capital! Look up the country's capital and get there pronto! Send us the name of where you're headed and we'll follow right behind you.

```SQL
-- YOUR SQL QUERY GOES HERE
```
**Answer:**

**Clue #7:** He knows we're on to him – his taxi dropped him off at the international airport, and he beat us to the boarding gates. We have one chance to catch him, we just have to know where he's heading and beat him to the landing dock.

Lucky for us, he's getting cocky. He left us a note, and I'm sure he thinks he's very clever, but if we can crack it, we can finally put him where he belongs – behind bars.

      Our playdate of late has been unusually fun –
      As an agent, I'll say, you've been a joy to outrun.
      And while the food here is great, and the people – so nice!
      I need a little more sunshine with my slice of life.
      So I'm off to add one to the population I find
      In a city of "holds breath" 
      ninety-one thousand and now, eighty four

We're counting on you, detective. Find out where he's headed, send us the info, and we'll be sure to meet him at the gates with bells on.

```SQL
-- YOUR SQL QUERY GOES HERE
```
**Answer:**


## Extensions

Write me a query that displays the capitals of the top ten highest gnp percentage increase of countries.

Write a query that orders the countries of the world in terms of population of speakers
