import { Node, LinkedList } from "./LinkedList.js";

// --- Test for Node constructor --- //
test("Testing the constructor", () => {
    const node1 = new Node(200, null);
    expect(node1.data).toBe(200);
    expect(node1.next).toBe(null);

    const node2 = new Node(300, 400);
    node1.next = node2;
    expect(node1.next).toEqual({ data: 300, next: 400 });
    expect(node1.next.data).toBe(300); // Or expect(node1['next'].data).toBe(300);
    expect(node1.next.next).toBe(400);
    expect(node2.data).toBe(300); // Alternative to 'node1.next.data' above
    expect(node2.next).toBe(400); // Alternative to 'node1.next.next' above
});

// --- Tests for LinkedList class and methods --- //
test("Testing the size and methods", () => {
    const myLL = new LinkedList();
    expect(myLL.size).toBe(0);

    myLL.insertFirst(100); //Testing insertFirst() here
    expect(myLL.size).toBe(1);

    myLL.insertLast(200); //Testing insertLast() here
    myLL.insertLast(300); //Testing insertLast() here
    expect(myLL.size).toBe(3);
});

test("Testing insertAt() method", () => {
    const myLL = new LinkedList();
    myLL.insertFirst(100);
    myLL.insertLast(300);
    myLL.insertAt(200, 1);
    expect(myLL.head.data).toBe(100);
    expect(myLL.head.next.data).toBe(200);
    expect(myLL.head.next.next.data).toBe(300);
});

test("Testing getAt() method", () => {
    const myLL = new LinkedList();
    myLL.insertFirst(100);
    myLL.insertLast(300);
    myLL.insertAt(200, 1);
    myLL.insertLast(400);
    expect(myLL.getAt(2)).toBe(300);
    expect(myLL.getAt(3)).toBe(400);
});

test("Testing removeAt() method", () => {
    const myLL = new LinkedList();
    myLL.insertFirst(100);
    myLL.insertLast(300);
    myLL.insertAt(200, 1);
    myLL.insertLast(400);
    myLL.removeAt(2);
    expect(myLL.size).toBe(3);
    //expect(myLL.getAt(2)).toBe(400); //Do elements in linkedlist assume new index after deletion?
    myLL.removeAt(1);
    expect(myLL.size).toBe(2);
});

test("Testing clearList() method", () => {
    const myLL = new LinkedList();
    myLL.insertFirst(100);
    myLL.insertLast(300);
    myLL.insertAt(200, 1);
    myLL.insertLast(400);
    myLL.clearList();
    expect(myLL.size).toBe(0);
    expect(myLL.head).toBe(null);
});

test("Testing printListData() method", () => {
    const myLL = new LinkedList();
    myLL.insertFirst(100);
    myLL.insertLast(300);
    myLL.insertAt(200, 1);
    myLL.insertLast(400);
    myLL.printListData();
    expect(myLL.size).toBe(4);
    expect(myLL.printListData()).toEqual([100, 200, 300, 400]);
});