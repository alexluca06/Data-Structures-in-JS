const assert = require('assert');
const LinkedList = require('./Linked List/LinkedList');
const DoubleLinkedList = require('./Double List/DoubleLinkedList');
const Queue = require('./Queue/Queue');
const Stack = require('./Stack/Stack');


describe('LinkedList class testing', () => {

    const linkedlist = new LinkedList();
    
    describe('addToHead() method:', () => {
        it('returns for addToHead(2) should be a list with the head data equals with 2', () => {

            // Setup
            const input = 2;
            const expectedResult = 2;

            // Exercise
            linkedlist.addToHead(input);
            const result = linkedlist.head.data;
           
            // Verification
            assert.strictEqual(result, expectedResult);

        });
    });

    describe('addToTail() method:', () => {
        it('returns for addToTail(4) should be a list with the tail data equals with 4', () => {

            // Setup
            const input = 4;
            const expectedResult = 4;

            // Exercise
            linkedlist.addToTail(input);
            const tail = linkedlist.head.getNextNode();
            const result = tail.data;
           
            // Verification
            assert.strictEqual(result, expectedResult);

        });
    });

    describe('removeHead() method:', () => {
        it('returns for removeHead() should be a list with the head data equals with 4', () => {

            // Setup
            const expectedResult = 4;

            // Exercise
            linkedlist.removeHead();
            const result = linkedlist.head.data;
           
            // Verification
            assert.strictEqual(result, expectedResult);

        });
    });
});


describe('DoubleLinkedList class testing', () => {

    const doublelinkedlist = new DoubleLinkedList();
    
    describe('addToHead() method:', () => {
        it('returns for addToHead(2) should be a list with the head data equals with 2', () => {

            // Setup
            const input = 2;
            const expectedResult = 2;

            // Exercise
            doublelinkedlist.addToHead(input);
            const result = doublelinkedlist.head.data;
           
            // Verification
            assert.strictEqual(result, expectedResult);

        });

        it('returns for addToHead(1) should be a list with the head data equals with 1', () => {

            // Setup
            const input = 1;
            const expectedResult = 1;

            // Exercise
            doublelinkedlist.addToHead(input);
            const result = doublelinkedlist.head.data;
           
            // Verification
            assert.strictEqual(result, expectedResult);

        });
    });

    describe('addToTail() method:', () => {
        it('returns for addToTail(3) should be a list with the tail data equals with 3', () => {

            // Setup
            const input = 3;
            const expectedResult = 3;

            // Exercise
            doublelinkedlist.addToTail(input);
            const tail = doublelinkedlist.tail;
            const result = tail.data;
           
            // Verification
            assert.strictEqual(result, expectedResult);

        });

        it('returns for addToTail(4) should be a list with the tail data equals with 4', () => {

            // Setup
            const input = 4;
            const expectedResult = 4;

            // Exercise
            doublelinkedlist.addToTail(input);
            const result = doublelinkedlist.tail.data;
           
            // Verification
            assert.strictEqual(result, expectedResult);

        });
    });

    describe('removeHead() method:', () => {
        it('returns for removeHead() should be a list with the head data equals with 2', () => {

            // Setup
            const expectedResult = 2;

            // Exercise
            doublelinkedlist.removeHead();
            const result = doublelinkedlist.head.data;
           
            // Verification
            assert.strictEqual(result, expectedResult);

        });
    });

    describe('removeTail() method:', () => {
        it('returns for removeTail() should be a list with the tail data equals with 3', () => {

            // Setup
            const expectedResult = 3;

            // Exercise
            doublelinkedlist.removeTail();
            const result = doublelinkedlist.tail.data;
           
            // Verification
            assert.strictEqual(result, expectedResult);

        });
    });

    describe('removeByData() method:', () => {
        it('returns for removeByData(2) should be a list with one node and data equals with 3', () => {

            // Setup
            const input = 2;
            const expectedResult = 3;

            // Exercise
            doublelinkedlist.removeByData(input);
            const result = doublelinkedlist.head.data;
           
            // Verification
            assert.strictEqual(result, expectedResult);

        });
    });
});


describe('Queue class testing', () => {

    const myQueue = new Queue(4);
    
    describe('enqueue() method:', () => {
        it('returns for enqueue(1) should be a queue with one element equals with 1', () => {

            // Setup
            const input = 1;
            const expectedResult = 1;

            // Exercise
            myQueue.enqueue(input);
            const result = myQueue.queue.head.data;
           
            // Verification
            assert.strictEqual(result, expectedResult);

        });
    });

    describe('isEmpty() method:', () => {
        it('returns for isEmpty() should be false: myqueue = [1]', () => {

            // Setup
            const expectedResult = false;

            // Exercise
            const result = myQueue.isEmpty()
           
            // Verification
            assert.strictEqual(result, expectedResult);

        });
    });

    describe('dequeue() method:', () => {
        it('returns for dequeue() should be a queue with zero element: size == 0', () => {

            // Setup
            const expectedResult = 0;

            // Exercise
            myQueue.dequeue();
            const result = myQueue.size;
           
            // Verification
            assert.strictEqual(result, expectedResult);

        });
    });

    describe('hasRoom() method:', () => {
        const myQueue = new Queue(3);
        myQueue.enqueue(1);
        myQueue.enqueue(2);
        myQueue.enqueue(3);

        it('returns for hasRoom() should be false because myQueue = [1, 2, 3] -> size == 3', () => {

            // Setup
            const expectedResult = false;

            // Exercise
            const result = myQueue.hasRoom();
           
            // Verification
            assert.strictEqual(result, expectedResult);

        });
        

        it('returns for hasRoom() should be true because myQueue = [1, 2] -> size == 2', () => {

            // Setup
            myQueue.dequeue()
            const expectedResult = true;

            // Exercise
            const result = myQueue.hasRoom();
           
            // Verification
            assert.strictEqual(result, expectedResult);

        });
    });

});


describe('Stack class testing', () => {

    const myStack = new Stack(2);
    
    describe('push() method:', () => {
        it('returns for push(1) should be a stack with the head data equals with 1', () => {

            // Setup
            const input = 1;
            const expectedResult = 1;

            // Exercise
            myStack.push(input);
            const result = myStack.stack.head.data;
           
            // Verification
            assert.strictEqual(result, expectedResult);

        });

        it('returns for push(2) should be a stack with the head data equals with 2', () => {

            // Setup
            const input = 2;
            const expectedResult = 2;

            // Exercise
            myStack.push(input);
            const result = myStack.stack.head.data;
           
            // Verification
            assert.strictEqual(result, expectedResult);

        });

        it('returns for push(3) should be an error: The stack is full!', () => {

            // Setup
            const input = 3;
            const expectedResult = Error;

            // Exercise
            const result = () => myStack.push(input);
           
            // Verification
            assert.throws(result, expectedResult);

        });
    });

    describe('isEmpty() method:', () => {
        it('returns for isEmpty() should be false: myStack = [2, 1]', () => {

            // Setup
            const expectedResult = false;

            // Exercise
            const result = myStack.isEmpty()
           
            // Verification
            assert.strictEqual(result, expectedResult);

        });
    });

    describe('hasRoom() method:', () => {
        it('returns for hasRoom() should be false: myStack.size == maxSize', () => {

            // Setup
            const expectedResult = false;

            // Exercise
            const result = myStack.hasRoom()
           
            // Verification
            assert.strictEqual(result, expectedResult);

        });
    });

    describe('pop() method:', () => {
        it('returns for pop() should be the stack with head data equals with 1: myStack = [1]', () => {

            // Setup
            const expectedResult = 1;

            // Exercise
            myStack.pop()
            const result = myStack.stack.head.data;
           
            // Verification
            assert.strictEqual(result, expectedResult);

        });

        it('returns for pop() should be an empty stack: myStack = [ ] & size == 0', () => {

            // Setup
            const expectedResult = 0;

            // Exercise
            myStack.pop()
            const result = myStack.size;
           
            // Verification
            assert.strictEqual(result, expectedResult);

        });

        it('returns for pop() should be an error: The stack is empty!', () => {

            // Setup
            const expectedResult = Error;

            // Exercise
            const result = () => myStack.pop();
           
            // Verification
            assert.throws(result, expectedResult);

        });
    });
});