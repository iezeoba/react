import React from 'react';
import Animate from 'animate.css-react'
import 'animate.css/animate.css'

class FIFODisplay extends React.Component {
    render() {
        const queueElement = this.props.queueDetails.map((item, i) => (
            <EachQueueElement item={item} key={i} elementPositionInQueue={i + 1} counter={this.props.counter} /> //Used 'elementPositionInQueue' to show the order of insertions for clarity // React would not allow use of the 'key' prop as it is reserved, so I created the 'elementPostionInQueue' prop and used the same value as that of 'key'. It is not duplicated or redundant, it's the solution recommended by react.org //
        ))
        return (
            <div className="clFIFODisplay">
                <strong><p>Queue Demo</p></strong>
                <div className="clQueueCards">{queueElement}</div>
                    Enter Data to Queue <input id="idDataToQueue" value={this.props.queueElementValue} onChange={this.props.newQueueElement} />
                <button id="idAddToQueue" className="clBtn" onClick={this.props.enqueue}>Put In Queue</button>
                <button id="idRemoveFromQueue" className="clBtn" onClick={this.props.dequeue}>Take Out</button>
            </div>
        );
    }
}
export default FIFODisplay;

function EachQueueElement(props) { //This component returns the queue element card
    return (
        <div className="clQueueElementCard" >
            <Animate
                appear="slideInRight"
                durationAppear={1000}
                component="div" >
                <button className="clQueueElementHover">{props.item}⇨{props.elementPositionInQueue}</button>
            </Animate>
        </div>
    )
};