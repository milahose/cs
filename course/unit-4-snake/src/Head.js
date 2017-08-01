// creates a constructor function - research ES6 classes
class Head {
  // this is what's called when you use the "new" keyword
  constructor($el) {
    this.node = $('<div id="head"></div>');
    this.currentDirection = 'right';
    this.SPEED = 500;
    $el.append(this.node);
    this.node.css({ top: 0, left: 0 });
    setTimeout(this.move.bind(this), this.SPEED);
  }
  // same as Head.prototype.move = function() {...}
  move() {
    var direction = this.currentDirection;
    var position = this.node.position();

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
    if ((position.left < 700 && position.left > 0) && (position.top > 0 && position.top < 700)) {
      setTimeout(this.move.bind(this), this.SPEED);
    } 
  }
}