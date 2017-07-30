const LIST_SIZE = 1000000;

describe('List', () => {
  describe('Your Array (Erray)', () => {
    let array;

    beforeEach(() => {
      array = new Erray();
    });

    it('should have push and pop method', () => {
      expect(array.push).to.be.a('function');
      expect(array.pop).to.be.a('function');
    });

    it('should have add and remove method', () => {
      expect(array.add).to.be.a('function');
      expect(array.remove).to.be.a('function');
    });

    it('should push one element to array', () => {
      array.push(0);
      expect(array.pop()).to.eql(0);
    });

    it('should push multiple elements to array', () => {
      array.push(0);
      array.push(1);
      array.push(2);
      array.push(3);
      array.push(4);
      expect(array.pop()).to.eql(4);
      expect(array.pop()).to.eql(3);
      expect(array.pop()).to.eql(2);
      expect(array.pop()).to.eql(1);
    });

    it('should return undefined when calling pop on empty array', () => {
      array.push(0);
      expect(array.pop()).to.eql(0);
      expect(array.pop()).to.eql(undefined);
      array.push(1);
      array.push(2);
      expect(array.pop()).to.eql(2);
      expect(array.pop()).to.eql(1);
    });

    it('should add element to middle of array', () => {
      array.push(0);
      array.push(1);
      array.push(2);
      array.add(1,4);
      expect(array.pop()).to.eql(2);
      expect(array.pop()).to.eql(1);
      expect(array.pop()).to.eql(4);
      expect(array.pop()).to.eql(0);
    });

    it('should remove element from middle of array', () => {
      array.push(0);
      array.push(1);
      array.push(2);
      array.remove(1);
      expect(array.pop()).to.eql(2);
      expect(array.pop()).to.eql(0);
    });
  });

  describe('LinkedList', () => {
    let linkedList;

    beforeEach(() => {
      linkedList = new LinkedList();
    });

    it('should have add and remove method', () => {
      expect(linkedList.add).to.be.a('function');
      expect(linkedList.get).to.be.a('function');
      expect(linkedList.remove).to.be.a('function');
    });

    it('should add one element to linkedList', () => {
      linkedList.add(0);
      expect(linkedList.head.value).to.eql(0);
    });

    it('should add multiple elements to linkedList', () => {
      linkedList.add(0);
      linkedList.add(1);
      linkedList.add(2);
      linkedList.add(3);
      linkedList.add(4);
      expect(linkedList.head.value).to.eql(0);
      expect(linkedList.head.next.value).to.eql(1);
      expect(linkedList.head.next.next.value).to.eql(2);
      expect(linkedList.head.next.next.next.value).to.eql(3);
      expect(linkedList.head.next.next.next.next.value).to.eql(4);
    });

    it('should retrieve first element from linkedList', () => {
      linkedList.add(8);
      expect(linkedList.get(0).value).to.eql(8);
    });

    it('should retrieve middle element from linkedList', () => {
      linkedList.add(2);
      linkedList.add(4);
      linkedList.add(6);
      expect(linkedList.get(1).value).to.eql(4);
    });

    it('should return -1 when index is out of bounds for get method', () => {
      linkedList.add(1);
      expect(linkedList.get(7)).to.eql(-1);
    });

    it('should remove element from end if no index is specified', () => {
      linkedList.add(0);
      linkedList.add(1);
      expect(linkedList.remove().value).to.eql(1);
      expect(linkedList.remove().value).to.eql(0);
    });

    it('should return -1 when index is out of bounds for remove method', () => {
      linkedList.add(9);
      expect(linkedList.remove(4)).to.eql(-1);
    });

    it('should add element to beginning of linkedList', () => {
      linkedList.add(0);
      linkedList.add(1,0);
      expect(linkedList.remove(0).value).to.eql(1);
      expect(linkedList.remove(0).value).to.eql(0);
    });

    it('should add element to specified index in linkedList', () => {
      linkedList.add(2);
      linkedList.add(4);
      linkedList.add(6);
      linkedList.add(8);
      linkedList.add(5, 1);
      expect(linkedList.remove(1).value).to.eql(5);
    });
  });

  describe('Speed Comparison', () => {
    beforeEach(() => {
      array = new Erray();
      linkedList = new LinkedList();
    });

    it('time it takes to get element in large array', () => {
      for (let i = 0; i <= LIST_SIZE; i++) {
        array.push(i);
      }
      expect(array.get(LIST_SIZE)).to.eql(LIST_SIZE);
    });

    it('time it takes to get element in large linkedlist', () => {
      for (let i = 0; i <= LIST_SIZE; i++) {
        linkedList.add(i);
      }
      expect(linkedList.get(LIST_SIZE).value).to.eql(LIST_SIZE);
    });

    it('array retrieval should be faster from linked list than array list', () => {
      for (let i = 0; i <= LIST_SIZE; i++) {
        array.push(i);
      }
      for (let i = 0; i <= LIST_SIZE; i++) {
        linkedList.add(i);
      }
      const arrayStart = Date.now();
      array.get(LIST_SIZE);
      const arrayTime = Date.now() - arrayStart;
      const linkedListStart = Date.now();
      linkedList.get(LIST_SIZE);
      const linkedListTime = Date.now() - linkedListStart;
      expect(arrayTime).to.be.lessThan(linkedListTime);
    });

    it('adding an element should be faster in linked list than array', () => {
      for (let i = 0; i <= LIST_SIZE; i++) {
        array.push(i);
      }
      for (let i = 0; i <= LIST_SIZE; i++) {
        linkedList.add(i);
      }
      const arrayStart = Date.now();
      array.add(0,0);
      const arrayTime = Date.now() - arrayStart;
      const linkedListStart = Date.now();
      linkedList.add(0,0);
      const linkedListTime = Date.now() - linkedListStart;
      expect(linkedListTime).to.be.lessThan(arrayTime);
    });

    it('removing an element should be faster in linked list than array', () => {
      for (let i = 0; i <= LIST_SIZE; i++) {
        array.push(i);
      }
      for (let i = 0; i <= LIST_SIZE; i++) {
        linkedList.add(i);
      }
      const arrayStart = Date.now();
      array.remove(0);
      const arrayTime = Date.now() - arrayStart;
      const linkedListStart = Date.now();
      linkedList.remove(0);
      const linkedListTime = Date.now() - linkedListStart;
      expect(linkedListTime).to.be.lessThan(arrayTime);
    });

  });
});
