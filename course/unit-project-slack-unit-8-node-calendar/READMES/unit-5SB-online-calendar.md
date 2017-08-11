#Online-Calendar

##Goal
In the previous challenge, you built a calendar web application with javascript, HTML, and CSS. The content of the schedule was found in the global variable "schedule". In production, data is frequently stored in remote database. In this challenge, you will connect with a remote database, extract your current week's schedule from there, and display in your calendar application.

##How do I get started
1. Copy your code from the w1-s1-calendar challenge into the main.js and index.html found in the client directory.

2. To serve your page, run the following command in your terminal:
````
npm start
````
Open your page by visiting "http://localhost:3000/"

3. Modify your main.js code to perform a GET request to the following URL:
````
https://www.googleapis.com/calendar/v3/calendars/pe13s26rvf4fud47l08ti750i0@group.calendar.google.com/events?key=AIzaSyAyucc-d1nuZQnRsbMeZ1RtP04ZIdKr0qU
````
4. Populate your schedule with the data received from the remote server

5. BONUS: Use jquery's promise feature

##How do I test if my answer is correct?
Run the following code in your terminal to test your code:
````
npm test
````
