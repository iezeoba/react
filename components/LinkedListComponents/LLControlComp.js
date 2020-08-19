import React from 'react';

class LLControl extends React.Component {

    render() {
        return (
            <div className="clLinkedList">
                Enter Data Here: <input id="idInputValue" placeholder="Type Data" onChange={this.props.input} value={this.props.value}></input>
                <button onClick={this.props.submit}>Submit</button>
                <p>Node Position: {this.props.nodePosition}</p>
                <p>Please select operation</p>
                <select id="dropdown" name="accounts" value={this.props.selectedValue} onChange={this.props.selectChange}>
                    <option value="Select">Select</option>
                    <option value="InsertFirst">Insert First</option>
                    <option value="InsertAtIndex">Insert At Index</option>
                    <option value="GetAtIndex">Get At Index</option>
                    <option value="RemoveAtIndex">Remove At Index</option>
                    <option value="ClearList">Clear List</option>
                    <option value="PrintList">Print List</option>
                    <option value="AllData">Print All Data</option>
                </select>
                <button onClick={this.props.operations}>Submit</button>
                <div>
                    <button id="idBackBtn" onClick={this.props.positionChange}>Back</button>
                    <button id="idForwardBtn" onClick={this.props.positionChange}>Forward</button>
                </div>
            </div>
        );
    }
}
export default LLControl;