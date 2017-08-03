// The following code appends a title to the page
// document.createElement creates an element that can be altered and then inserted into the DOM
// document.body.appendChild places a node as a child under the body element
// var title = document.createElement('div');
// title.innerHTML = 'Social Calendar';
// document.body.appendChild(title);



// Your schedule can be accessed through the global object "schedule"
// console.log(schedule);




// Slack Clone 
$(document).ready(function() {
    $('#submit').on('click', postMessage);
    let previousMessage;

    function postMessage () {
        let postBody = {
            created_by: 'Jon and Mila',
            message: $('#messageText').val(),
        };
        $.ajax({
            type: 'POST',
            url: 'http://slack-server.elasticbeanstalk.com/messages',
            contentType: 'application/json',
            data: JSON.stringify(postBody)
        })
    };

    function refreshFeed () {
        $.ajax({
            type: 'GET',
            url: 'http://slack-server.elasticbeanstalk.com/messages',
            success: function (data) {
                if (data[0].created_by !== previousMessage.created_by || data[0].message !== previousMessage.message) {
                    let userName = $('<div class="username">' + data[0].created_by + '</div>');
                    let message = $('<div class="message">' + data[0].message + '</div>');
                    $('#chatbox')
                        .append(userName)
                        .append(message);
                    previousMessage = data[0];
                }
                setTimeout(refreshFeed, 500);
            }
        });
        
    };

    
    let request = new XMLHttpRequest();
    request.open('GET', 'http://slack-server.elasticbeanstalk.com/messages', true);
    request.onload = function() {
        if (request.status >= 200 && request.status < 400) {
            let data = JSON.parse(request.response);
            for (let i = data.length - 1; i > 0; i--) {
                let userName = $('<div class="username">' + data[i].created_by + '</div>');
                let message = $('<div class="message">' + data[i].message + '</div>');
                $('#chatbox')
                    .append(userName)
                    .append(message);
                previousMessage = data[0];
            }
        } else {
            console.log('error');
        }
    };
    request.send();

    refreshFeed();

});
