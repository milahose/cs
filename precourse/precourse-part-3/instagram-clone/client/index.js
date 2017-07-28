var username = "";
var password = "";
var currentUser;

var userAccounts = {
    username1: 'password1',
    username2: 'password2', 
    username3: 'password3'
}

function makePassword() {
  document.getElementById("password")
    .innerHTML = "<input type=\"password\" id=\"password\" name=\"password\" />";
  document.getElementById("password").focus();
}

//This function accepts the username and password values, stores them, and then checks if they are valid username and password combinations. If they are valid, it redirects the page over to the users feed.
function verifyPassword(){
  username = document.getElementById('username').value;
  password = document.getElementById('password').value;
    
  if (userAccounts[username] === password) {
      currentUser = username;
      window.location.href='/client/feed.html'; 
  }
}