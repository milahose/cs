class Apple {
  constructor($el) {
    this.node = $('<img id="apple"></img>');
    this.node.attr('src', 'src/assets/apple.jpg');
    $el.append(this.node);
    this.node.css({ top: Math.floor(Math.random() * 13) * 50 + 9, left: Math.floor(Math.random() * 13) * 50 + 9});
    $('#apple').css({position: 'absolute'});
    this.position = this.node.position();
  }

  appleMove() {
  	let position = this.node.css({ top: Math.floor(Math.random() * 13) * 50 + 9, left: Math.floor(Math.random() * 13) * 50 + 9});

    // this.node.offset(position);
  }
}
