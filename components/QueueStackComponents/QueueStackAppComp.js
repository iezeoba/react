import React from 'react';
//import React, { Fragment } from 'react'; //Didn't use the 'fragment' cos I didn't use the TransitionGroup library which it was meant for //
//import { TransitionGroup } from 'react-transition-group'; //Didn't use this library anymore //
import Animate from 'animate.css-react'
import './QueueStack.css';
import FIFODisplay from './FIFODisplayComp';
import LIFODisplay from './LIFODisplayComp';
import { Stack, Queue } from '../../business/QueueStack';

class QueueStackApp extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            newStackElement: "",
            newQueueElement: "",
            stackContent: [],
            queueContent: [],
            peekElement: "",
            count: 0   //Using this to visualize the order of insertions. Didn't use it eventually //
        }
        this.myStack = new Stack();
        this.myQueue = new Queue();
    }

    handleNewStackElement = (e) => {
        this.setState({ newStackElement: e.target.value })
    }

    handleNewQueueElement = (e) => {
        this.setState({ newQueueElement: e.target.value })
    }

    onClickQueue = () => {  // Tucked in 'handleEnqueue' and 'increment' into this wrapper function 'onClickQueue()' to fire both functions on onClick //
        this.handleEnqueue();
        this.increment();
    }

    increment() {
        this.setState({ count: this.state.count + 1 });
    };

    handleEnqueue = () => {
        this.myQueue.enqueue(this.state.newQueueElement)
        this.setState({ queueContent: this.myQueue.allQueueElements, newQueueElement: "" })
        console.log(this.myQueue);
    }

    handleDequeue = () => {
        this.myQueue.dequeue() //Takes no argument, just shifts (removes) the first element //
        this.setState({ queueContent: this.myQueue.allQueueElements })
        console.log(this.myQueue);
    }

    handleAddToStack = () => {
        this.myStack.push(this.state.newStackElement)
        this.setState({ stackContent: this.myStack.allStackElements, newStackElement: "" })
        console.log(this.myStack);
        console.log(this.state.newStackElement);
    }

    handlePopFromToStack = () => {
        this.myStack.pop() //Takes no argument, just pops the last element //
        this.setState({ stackContent: this.myStack.allStackElements })
        console.log(this.myStack);
    }

    handlePeekStack = () => {
        this.setState({ peekElement: this.myStack.peek() }) //The peek() takes no argument, just returns the last element //
    }

    render() {

        return (
            <div className="clQueueStackContainer">
                <h1 id="h1">FIFO LIFO</h1>
                <div className="clDisplay">
                    <FIFODisplay newQueueElement={this.handleNewQueueElement}
                        queueElementValue={this.state.newQueueElement}
                        enqueue={this.handleEnqueue}
                        // enqueue={this.onClickQueue} //created this prop 'onClickQueue' to call multiple functions on one onClick event. It is a wrapper function // Wasn't used any more cos I figured how to use the 'key' prop and extract the index (key={i}) to use as the counter //
                        dequeue={this.handleDequeue}
                        queueDetails={this.state.queueContent}
                        counter={this.state.count} />
                    <LIFODisplay newStackElement={this.handleNewStackElement}
                        stackElementValue={this.state.newStackElement}
                        addToStack={this.handleAddToStack}
                        popFromStack={this.handlePopFromToStack}
                        peekStack={this.handlePeekStack}
                        peeked={this.state.peekElement}
                        stackDetails={this.state.stackContent} />
                </div>
            </div>
        );
    }
};
export default QueueStackApp;