var header1 = React.createElement('h1', null, 'Simon');

ReactDOM.render(header1, document.getElementById('header'));

var div = React.createElement('div', {className: 'box'});


var Board = React.createClass({

  getInitialState: function() {
    return {};
  },

  render: function() {
    var boxes = [div, div, div, div, div, div, div, div, div, div, div, div, div, div, div, div];

    var button = React.createElement('button', { className: 'btn' }, ['New ', 'Colors!']);
    return React.createElement('div', { id: 'board' }, button, boxes);

  }

});

var myBoard = React.createElement(Board);

ReactDOM.render(myBoard, document.getElementById('content'));