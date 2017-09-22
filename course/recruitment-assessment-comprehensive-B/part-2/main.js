function Stack() {
  this.contents = {};
  this.length = 0;
}

Stack.prototype.push = function (value) {
  this.contents[this.length++] = value;
};

Stack.prototype.pop = function () {
  let result = this.contents[this.length - 1];
  this.length--;
  return result;
};

Stack.prototype.forEach = function (callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i]);
  }
};


function Queue() {
  this.stack1 = new Stack;
  this.stack2 = new Stack;
}

Queue.prototype.enqueue = function (value) {
  this.stack1.push(value);
};

Queue.prototype.dequeue = function () {
  if (!this.stack2.length) {
    for (let i = 0; i < this.stack1.length; i++) {
      this.stack2.push(this.stack1.pop());
    }
  }

  return this.stack2.pop();
};

module.exports = { Stack, Queue };
