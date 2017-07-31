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
    let direction = this.currentDirection;
    let position = this.node.position();

    if (direction === 'right') {
      position.left += 50;
    }

    this.node.offset(position);
    setTimeout(this.move.bind(this), this.SPEED);
  }

}
