var graph, nodes = {}, values = [3, 5, 6, 7, 10];
xdescribe('Graph', function() {
  beforeEach(function() {
    graph = new Graph(0);
    values.forEach(function(num) {
      nodes[num] = new Graph(num);
    });
    graph.edges = [nodes[3], nodes[5], nodes[6]];
    nodes[6].edges = [nodes[10]];
    nodes[10].edges = [nodes[5], nodes[7]];
    nodes[7].edges = [nodes[3]];
  });

  it('should have an addNode and contains function', function() {
    expect(graph.addNode).to.be.a('function');
    expect(graph.contains).to.be.a('function');
  });

  it('should find nodes using the contains method', function() {
    expect(graph.contains(0)).to.be(true);
    expect(graph.contains(3)).to.be(true);
    expect(graph.contains(5)).to.be(true);
    expect(graph.contains(6)).to.be(true);
    expect(graph.contains(10)).to.be(true);
    expect(graph.contains(7)).to.be(true);
    expect(graph.contains(15)).to.be(false);
  });

  it('should add edges to graph', function() {
    expect(graph.contains(1337)).to.be(false);
    expect(graph.contains(9001)).to.be(false);
    nodes[7].addNode(1337);
    expect(graph.contains(1337)).to.be(true);
    nodes[10].addNode(9001);
    expect(graph.contains(9001)).to.be(true);
  });

  it('should remove node', function() {
    expect(graph.contains(3)).to.be(true);
    expect(graph.contains(5)).to.be(true);
    graph.remove(5);
    expect(graph.contains(5)).to.be(false);
    graph.remove(3);
    expect(graph.contains(3)).to.be(false);
  });

  it('should remove all nodes with inputted value', function() {
    expect(graph.contains(10)).to.be(true);
    graph.addNode(10);
    graph.addNode(10);
    graph.remove(10);
    expect(graph.contains(10)).to.be(false);
  });

});
