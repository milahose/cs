class Apple {

  constructor($el) {
    this.node = $('<img id="apple"></img>');
    this.node.attr('src', 'src/assets/apple.jpg');
    $el.append(this.node);
    this.node.css({ top: Math.floor(Math.random() * 13) * 50, left: Math.floor(Math.random() * 13) * 50});
    $('#apple').css({position: 'relative'});
  }

}
