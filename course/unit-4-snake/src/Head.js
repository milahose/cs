// creates a constructor function - research ES6 classes
class Head {

  // this is what's called when you use the "new" keyword
  constructor($el) {
    this.node = $('<div id="head"></div>');
    this.currentDirection = 'right';
    this.SPEED = 500;
    $el.append(this.node);
    this.node.css({ top: 0, left: 0 });
    // $('#head').css({position: 'absolute'});
    setTimeout(this.move.bind(this), this.SPEED);
    // this.position = this.node;
  }

  // same as Head.prototype.move = function() {...}
  move() {
    var direction = this.currentDirection;
    let position = this.node.position();
    console.log(position.top);
    console.log('apple', $('#apple').position().top);

    if (direction === 'right') {
      position.left += 50;
    } else if (direction === 'left') {
      position.left -= 50;
    } else if (direction === 'up') {
      position.top -= 50;
    } else if (direction === 'down') {
      position.top += 50;
    }

    this.node.offset(position);

    if ($('#apple').position().top === position.top && $('#apple').position().left === position.left) {
      $('#apple').css({ top: Math.floor(Math.random() * 13) * 50, left: Math.floor(Math.random() * 13) * 50});
      
    }

    if ((position.left < 700 && position.left > 0) && (position.top > 0 && position.top < 700)) {
      setTimeout(this.move.bind(this), this.SPEED);
    }
  }
}
