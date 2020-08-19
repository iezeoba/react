class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

// const n1 = new Node(100);
// console.log(n1);

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    //We will create methods to operate the linked list as follows:
    insertFirst(data) {     //This method inserts first node //
        this.head = new Node(data, this.head)       //Note that 'this.head' is used as the next(pointer) argument //
        this.size++
    }

    insertLast(data) {
        let node = new Node(data);
        let current;
        if (this.head === null) {
            this.head = node;
        } else {
            current = this.head;

            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }
        this.size++
    }

    insertAt(data, index) {
        if (index > 0 && index > this.size) {   //Takes care of 'if index is out of range' //
            return;
        }
        if (index === 0) {  //If first index //
            this.head = new Node(data, this.head);
            return;
        }

        const node = new Node(data);
        let current, previous;

        //Set current to first //
        current = this.head;
        let count = 0;
        while (count < index) {
            previous = current; //Node before index
            count++;
            current = current.next; //Node after index
        }
        node.next = current;
        previous.next = node;

        this.size++
    }

    getAt(index) {
        let current = this.head;
        let count = 0;

        while (current) {
            if (count === index) {
                return current.data; // Or console.log(current.data); //If you want to print to the console
            }
            count++;
            current = current.next;
        }
        return null
    }

    removeAt(index) {
        if (index > 0 && index > this.size) {
            return;
        }
        let current = this.head;
        let previous;
        let count = 0;

        if (index === 0) {  //Remove first index
            this.head = current.next;
        } else {
            while (count < index) {
                count++;
                previous = current;
                current = current.next;
            }
            previous.next = current.next;
        }
        this.size--;
    }

    clearList() {
        this.head = null;
        this.size = 0;
    }

    printListData() {
        let current = this.head;
        let list = [];  //Or let str = ""; //To return as string
        while (current) {
            list.push(current.data)    //Or str +=`${current.data}->`//Using string     //Or console.log(current.data); //If you want to print to the console
            current = current.next;
        }
        return list;    //Or str += 'null' then 'return str'
    }

    allData() {     //Prints all data showing all nodes 
        return this.head
    }
}
export { Node, LinkedList };

// Testing the LinkedList class created
// const myLL = new LinkedList();
// myLL.insertFirst(100); // Prints node with one object
// myLL.insertFirst(200); // Prints node with two objects, the initial object is pushed to positon two as asigned in the parameters //
