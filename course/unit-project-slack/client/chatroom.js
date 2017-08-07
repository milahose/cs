$(document).ready(function() {
    $('#submit').on('click', postMessage);
    let previousMessage;
    let storage;
    let temp = [];

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
                for (let i = 0; i < data.length; i++) {
                    if (storage[0].created_at === data[i].created_at || storage[0].message === data[i].message) {
                        break;
                    }
                    temp.push(data[i]);
                }
                storage = data;
                temp.forEach((x, i) => {
                    let userName = $('<div class="username">' + x.created_by + '</div>');
                    let message = $('<div class="message">' + x.message + '</div>');
                    $('#chatbox')
                        .append(userName)
                        .append(message);
                });
                temp = [];
                setTimeout(refreshFeed, 500);
            }
        });
        
    };

    
    let request = new XMLHttpRequest();
    request.open('GET', 'http://slack-server.elasticbeanstalk.com/messages', true);
    request.onload = function() {
        if (request.status >= 200 && request.status < 400) {
            let data = JSON.parse(request.response);
            storage = data;
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

    setTimeout(refreshFeed, 1000);

});


console.log("hello world")