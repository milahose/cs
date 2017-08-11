// messageModel.js connects to a real database. if tests are running slow, you
// can comment out line 4 and comment in line 5 to use a hardcoded 'mock' database
// (Note: you need to do the same in the node-chatroom-test.js file to run tests)
const Message = require('./messageModel');
// const Message = require('./messageModelMock');

module.exports = {
  getMessages: (request, response) => {
    Message.find({}, (err, foundMessages) => {
      if (err) {
        return response.end(err);
      }
      if (foundMessages) {
        let arr = [];
        for (let i = 0; i < foundMessages.length; i++) {
          if (!foundMessages[i].message) {
            arr.push({'created_by' : foundMessages[i].created_by,
          'message' : ''});
          }
          else {arr.push({'created_by' : foundMessages[i].created_by,
          'message' : foundMessages[i].message});
      }}
         return response.end(JSON.stringify(arr));
      }


    });
  },
  postMessage: (request, response) => {
    let messageToSave;
    // console.log(request)
    request.on('data', (chunk) => {
      messageToSave = JSON.parse(chunk);
      Message.create(messageToSave, (err) => {
        if (err) {
          response.statusCode = 400;
          return response.end();
        }
        return response.end();
        });
    });
  }
};
