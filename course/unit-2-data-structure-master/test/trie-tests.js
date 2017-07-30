var trie;

xdescribe('Trie', function() {

  before(function() {
    trie = new Trie;
  });

  it('should have "insert" and "find" methods', function() {
    expect(trie.insert).to.be.a('function');
    expect(trie.find).to.be.a('function');
  });

  it('should insert one-letter strings and find them', function() {
    trie.insert('a');
    expect(trie.find('a')).to.equal(true);
  });

  it('should insert two-letter strings and find them', function() {
    trie.insert('if');
    expect(trie.find('if')).to.equal(true);
    expect(trie.find('i')).to.equal(false);
    expect(trie.find('f')).to.equal(false);
  });

  it('should insert and strings and find them', function() {
    trie.insert('andy');
    expect(trie.find('a')).to.equal(true);  // from the first test
    expect(trie.find('an')).to.equal(false);
    expect(trie.find('and')).to.equal(false);
    expect(trie.find('andy')).to.equal(true);
    trie.insert('andycarlson');
    expect(trie.find('andycarlson')).to.equal(true);
    expect(trie.find('andy')).to.equal(true);
    expect(trie.find('andyc')).to.equal(false);
    trie.insert('lololol');
    trie.insert('corn');
    trie.insert('iwillkickyouinthefacewithmyfist');
    expect(trie.find('lololol')).to.equal(true);
    expect(trie.find('corn')).to.equal(true);
    expect(trie.find('iwillkickyouinthefacewithmyfist')).to.equal(true);
  });

});
