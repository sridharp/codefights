// Definition for singly-linked list:
function ListNode(x) {
  this.value = x;
  this.next = null;
}

function removeKFromList(l, k) {
    var head = l;
    var prev = null;
    if (!l)
        return l;
    while(l.next) {
        if (l.value == k) {
            if (prev) {
                prev.next = l.next;
            } else {
                head = l.next;
            }
        } else {
            prev = l;
        }
        l = l.next;
    }
    if (l.value == k){
        if (head.next == null) {
            return null;
        } else {
            prev.next = null;
        }
    }
    return head;
}

a = new ListNode(123);
a.next = new ListNode(456);
a.next.next =  new ListNode(789);
a.next.next.next = new ListNode(0);
a.next.next.next.next = new ListNode(0);
a.next.next.next.next.next = new ListNode(0);
console.log(removeKFromList(a, 0));