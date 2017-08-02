/**
 * Write a function that takes two parameters, an integer and the head of a
 * singly linked list, and returns the VALUE on the kth to last node in the list.
 *
 * const a = new Node('A');
 * const b = new Node('B');
 * const c = new Node('C');
 * const d = new Node('D');
 * const e = new Node('E');
 *
 * a.next = b;
 * b.next = c;
 * c.next = d;
 * d.next = e;
 *
 * kthToLastNode(2, a); -> returns 'D' (the value on the second to last node)
 */

function Node(val) {
  this.value = val;
  this.next = null;
}

function kthToLastNode(k, head) {
<<<<<<< HEAD
	var current;

	while (current) {
		if (current.value === k) {
			return current.value;
		} else {
			return "Not Found";
		}
	}
}
=======

}

module.exports = {Node: Node, kthToLastNode: kthToLastNode};
>>>>>>> a0598932afffedeb7098cc55bd823627a768f994
