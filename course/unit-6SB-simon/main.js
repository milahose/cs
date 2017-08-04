var header1 = React.createElement('h1', null, 'Simon');

ReactDOM.render(header1, document.getElementById('header'));



var Board = React.createClass({

  getInitialState: function() {
    return {};
  },

  render: function() {
    var boxes = [];

    var button = React.createElement('button', { className: 'btn' }, ['New ', 'Colors!']);
    return React.createElement('div', { id: 'board' }, button);
  }

});

var myBoard = React.createElement(Board);

ReactDOM.render(myBoard, document.getElementById('content'));