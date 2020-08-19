import React, { useState, useEffect } from 'react';
import LLControl from './LLControlComp';
import LLVisualDisplay from './LLVisualDisplayComp';
import LLDataDisplay from './LLDataDisplayComp';
import { Node, LinkedList } from '../../business/LinkedList.js';
import './LinkedList.css';

const myLL = new LinkedList();
// console.log(myLL);


function LinkedListApp() {
    const [inputValue, setInputValue] = useState("")
    const [select, setSelect] = useState("");
    const [nodePosition, setNodePosition] = useState(0)
    const [linkedListValues, setLinkedListValues] = useState("")


    const handleSubmit = () => {
        myLL.insertLast(inputValue)
        //console.log(myLL.printListData());
        console.log(myLL);
        setInputValue("");
    }

    const handlePositionChange = (e) => {
        if (e.target.id === "idBackBtn") {
            if (nodePosition === 0) {
                setNodePosition(0)
            } else {
                setNodePosition(nodePosition - 1)
            }
        } else {
            setNodePosition(nodePosition + 1)
        }
    }

    const handleOperations = () => {
        console.log(select);

        // printLL1();  //Prints list to the div //
        if (select === "InsertAtIndex") {
            if (nodePosition === 0) {
                myLL.insertAt(inputValue, nodePosition)
            } else {
                myLL.insertAt(inputValue, nodePosition - 1)
            }
        } else if (select === "RemoveAtIndex") {
            myLL.removeAt(nodePosition)
        }
        else if (select === "GetAtIndex") {
            setLinkedListValues(myLL.getAt(nodePosition))
            console.log(myLL.getAt(nodePosition));

        }
        else if (select === "PrintList") {
            setLinkedListValues(myLL.printListData())
            console.log(myLL.printListData());
        }
        else if (select === "InsertFirst") {
            console.log("testing");

            myLL.insertFirst(inputValue)
        }
        else if (select === "ClearList") {
            myLL.clearList()
        }
        else if (select === "AllData") {
            console.log(myLL.allData());
        }
        setInputValue("");
        // console.log(myLL)
    }

    return (
        <div className="clLinkedListContainer">
            <h1 id="h1">Linked List</h1>
            <LLControl input={(e) => setInputValue(e.target.value)} value={inputValue}
                submit={() => handleSubmit()}
                selectChange={(e) => setSelect(e.target.value)}

                selectValue={select}
                nodePosition={nodePosition}
                positionChange={handlePositionChange}
                operations={handleOperations}
            />
            <LLVisualDisplay myLinkedList={null} />
            <LLDataDisplay linkedList={linkedListValues} />
            {/* <LLCard /> */}

        </div>
    );
};
export default LinkedListApp;

const printLL1 = () => {
    (function () {
        // let old = console.log;
        let logger = document.getElementById('idLLDataDisplay');

        console.log = function () {
            for (let i = 0; i < arguments.length; i++) {
                if (typeof arguments[i] === 'object') {
                    logger.innerHTML += (JSON && JSON.stringify ? JSON.stringify(arguments[i], undefined, 2) : arguments[i]) + '<hr />';
                }
                else if (typeof arguments[i] !== 'object') {
                    logger.innerHTML += arguments[i] + '<hr />';
                }
            }
            // old.apply(undefined, arguments);
        }
    })();

}