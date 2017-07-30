var tree;
xdescribe('Tree', function() {
  beforeEach(function() {
    tree = new Tree();
  });

  it('should have add and contains function', function() {
    expect(tree.add).to.be.a('function');
    expect(tree.contains).to.be.a('function');
  });

  it('should have no children when created', function() {
    expect(tree.children.length).to.eql(0);
  });

  it('should have add children', function() {
    tree.add(5);
    expect(tree.children[0].value).to.eql(5);
  });

  it('should have add multiple children', function() {
    tree.add(5);
    tree.add(8);
    expect(tree.contains(5)).to.eql(true);
    expect(tree.contains(8)).to.eql(true);
  });

  it('should add children to children', function() {
    tree.add(5);
    tree.children[0].add(4);
    expect(tree.contains(4)).to.eql(true);
  });


  it('should calculate height', function() {
    tree.add(5);
    tree.add(8);
    var son = tree.children[0];
    son.add(1);
    son.add(4);
    var daughter = tree.children[0];
    daughter.add(10);
    var grandson = son.children[1];
    grandson.add(3);
    expect(grandson.height()).to.be(1);
    expect(tree.height()).to.be(3);
  });
});
