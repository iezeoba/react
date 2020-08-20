import { Stack, Queue } from "./QueueStack.js";

// --- Test the Stack constructor --- //
test("Testing the constructor", () => {
    const stack = new Stack();
    console.log(stack);
});

test("Testing the push() method", () => {
    const stack = new Stack();
    stack.push("one");
    console.log(stack.storage);
    //expect(stack.storage.size).toBe("one"); // Or expect(stack.storage["size"]).toBe("one"); Using bracket notation
    expect(stack.size).toBe(1);
    stack.push("two");
    stack.push("three");
    console.log(stack);
});

test("Testing the pop() method", () => {
    const stack = new Stack();
    stack.push("one");
    stack.push("two");
    stack.push("three");
    stack.pop();
    expect(stack.size).toBe(2);
    stack.pop();
    expect(stack.size).toBe(1);
    console.log(stack);
});

test("Testing the peek() method", () => {
    const stack = new Stack();
    stack.push("one");
    stack.push("two");
    let result = stack.peek();
    expect(result).toBe("two");
});

// --- Test the Queue constructor --- //
test("Testing the constructor", () => {
    const queue = new Queue();
    console.log(queue);
});

test("Testing the enqueue() method", () => {    //How do I test this?????
    const queue = new Queue();
    queue.enqueue("one");
    console.log(queue.storage);
    console.log(queue.head)
});

test("Testing the dequeue() method", () => {    //How do I test this?????
    const queue = new Queue();
    queue.enqueue("one");
    queue.enqueue("two");
    queue.enqueue("three");
    queue.dequeue();
    console.log(queue.storage);
    console.log(queue)
});