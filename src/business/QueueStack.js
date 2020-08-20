class Stack {
    constructor() {
        this.storage = {};
        this.size = 0;
        this.allStackElements = [];
    }

    push(element) {
        this.size++;
        this.storage[this.size] = element;
        this.allStackElements.push(element) //To store all stacked elements in an array
    }

    pop() {
        let removed = this.storage[this.size]
        delete this.storage[this.size]
        this.size--
        this.allStackElements.pop();
        return removed
    }

    peek() {
        console.log(this.storage[this.size]);
        return this.storage[this.size]

    }
}

class Queue {
    constructor() {
        this.storage = {};
        this.head = 0;
        this.tail = 0;
        this.allQueueElements = [];
    }

    enqueue(element) {
        this.storage[this.tail] = element
        this.tail++;
        this.allQueueElements.push(element);    //To store all queued elements in an array
    }

    dequeue() {
        let removed = this.storage[this.head]
        delete this.storage[this.head]
        this.head++
        this.allQueueElements.shift();  //To manipulate all queued elements in an array
        return removed
    }
}
export { Stack, Queue }
