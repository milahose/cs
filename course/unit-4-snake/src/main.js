$(document).ready(function() {
  const head = new Head($('#board'));
  const apple = new Apple($('#board'));

  $('body').on('keydown', function(e) {
    if (e.keyCode === 37) {
      console.log('pressed left');
      head.currentDirection = 'left';
    }
  });
});
