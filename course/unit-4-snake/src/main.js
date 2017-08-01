$(document).ready(function() {
  const head = new Head($('#board'));
  const apple = new Apple($('#board'));
  $('body').on('keydown', function(e) {
    if (e.keyCode === 37) {
      console.log('pressed left');
      head.currentDirection = 'left';
    } else if (e.keyCode === 38) {
      console.log('pressed up');
      head.currentDirection = 'up';
    } else if (e.keyCode === 39) {
      console.log('pressed right');
      head.currentDirection = 'right';
    } else if (e.keyCode === 40) {
      console.log('pressed down');
      head.currentDirection = 'down';
    }
  });
});
