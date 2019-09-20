function ListNode(val){
    this.val = val;
    this.next = null;
}

var l2 = new ListNode(1);
l2.next = new ListNode(2);
l2.next.next = new ListNode(3);

var node = l2;
while(node){
    console.log(node.val);
    node = node.next;
}

// 将两个有序链表合并为一个新的有序链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的