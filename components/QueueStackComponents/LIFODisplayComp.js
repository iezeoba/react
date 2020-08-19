import React from 'react';
//import { TransitionGroup } from 'react-transition-group';   //Library not used eventually //
import Animate from 'animate.css-react'
import 'animate.css/animate.css'

class LIFODisplay extends React.Component {
    render() {
        const stackElement = this.props.stackDetails.map((item, i) => (
            <EachStackElement item={item} key={i} elementPositionInStack={i + 1} counter={this.props.counter} /> //Used 'elementPositionInStack' to show the order of insertions for clarity // React would not allow use of the 'key' prop as it is reserved, so I created the 'elementPostionInStack' prop and used the same value as that of 'key'. It is not duplicated or redundant, it's the solution recommended by react.org //
        ))
        return (
            <div className="clLIFODisplay">
                <strong><p>Stack Demo</p></strong>
                <div className="clStackCards">{stackElement}</div>
                    Enter Data to Stack <input id="idDataToStack" value={this.props.stackElementValue} onChange={this.props.newStackElement} />
                <button id="idAddToStack" className="clBtn" onClick={this.props.addToStack}>Put In Stack</button>
                <button id="idPopFromStack" className="clBtn" onClick={this.props.popFromStack}>Take Out</button>
                <button id="idPeekStack" className="clBtn" onClick={this.props.peekStack}>Peek</button>
                <h6>*Click 'Peek' to see last element</h6>
                <p>{`Last element is ${this.props.peeked}`}</p>
            </div>
        );
    }
}
export default LIFODisplay;

function EachStackElement(props) { //This component returns the stack element card
    return (
        <div className="clStackElementCard" >
            <Animate
                appear="slideInLeft"
                durationAppear={1000}
                leave="slideOutRight" //Not working. Figure out the reverse of 'appear' //
                component="div" >
                <button className="clStackElementHover">{props.item}⇨{props.elementPositionInStack}</button>
            </Animate>
        </div>
    )
};