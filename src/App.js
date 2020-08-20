import React from 'react';
import './App.css';
import Game from './components/Game';
import Home from './components/Home';
import Navbar from './components/Navbar';
import BankAppComp from './components/BankAppComponents/BankAppComp';
import CityAppComp from './components/City_CommunityAppComponents/CityAppComp';
import LinkedListAppComp from './components/LinkedListComponents/LinkedListAppCom';
import QueueStackAppComp from './components/QueueStackComponents/QueueStackAppComp';
import ContextAppComp from './components/ContextAppComponents/ContextAppComp.js';

// function App() {
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "Welcome"
    }
    this.getValue = this.getValue.bind(this)
  }
  getValue(event) {
    let idHome = document.getElementById("home");
    let idGame = document.getElementById("game");
    let idAccount = document.getElementById("account");
    let idCity = document.getElementById("city");
    let idLinkedList = document.getElementById("linkedList");
    let idQueueStack = document.getElementById("queueStack");
    let idContext = document.getElementById("context");

    if (event.target.id === "id-reactlogo") {
      this.setState({
        value: "This is the react icon"
      });
      idHome.style.display = "block";
      idGame.style.display = "none";
      idAccount.style.display = "none";
      idCity.style.display = "none";
      idLinkedList.style.display = "none";
      idQueueStack.style.display = "none";
      idContext.style.display = "none";
    }
    else if (event.target.id === "id-lego") {
      this.setState({
        value: "This is the tic-tac-toe game"
      });
      idHome.style.display = "none";
      idGame.style.display = "block";
      idAccount.style.display = "none";
      idCity.style.display = "none";
      idLinkedList.style.display = "none";
      idQueueStack.style.display = "none";
      idContext.style.display = "none";
    }
    else if (event.target.id === "id-menu") {
      this.setState({
        value: "This is the menu icon"
      });
      idHome.style.display = "none";
      idGame.style.display = "none";
      idAccount.style.display = "block";
      idCity.style.display = "none";
      idLinkedList.style.display = "none";
      idQueueStack.style.display = "none";
      idContext.style.display = "none";
    }
    else if (event.target.id === "id-maps") {
      this.setState({
        value: "This is the map icon"
      });
      idHome.style.display = "none";
      idGame.style.display = "none";
      idAccount.style.display = "none";
      idCity.style.display = "block";
      idLinkedList.style.display = "none";
      idQueueStack.style.display = "none";
      idContext.style.display = "none";
    }
    else if (event.target.id === "id-network") {
      this.setState({
        value: "This is the network-linkedlist icon"
      });
      idHome.style.display = "none";
      idGame.style.display = "none";
      idAccount.style.display = "none";
      idCity.style.display = "none";
      idLinkedList.style.display = "block";
      idQueueStack.style.display = "none";
      idContext.style.display = "none";
    }
    else if (event.target.id === "id-layers") {
      this.setState({
        value: "This is the layers-queue-stack icon"
      });
      idHome.style.display = "none";
      idGame.style.display = "none";
      idAccount.style.display = "none";
      idCity.style.display = "none";
      idLinkedList.style.display = "none";
      idQueueStack.style.display = "block";
      idContext.style.display = "none";
    }
    else if (event.target.id === "id-gears") {
      this.setState({
        value: "This is the react context icon"
      });
      idHome.style.display = "none";
      idGame.style.display = "none";
      idAccount.style.display = "none";
      idCity.style.display = "none";
      idLinkedList.style.display = "none";
      idQueueStack.style.display = "none";
      idContext.style.display = "block";
    }
  }

  render() {
    return (
      <div className="App">
        <div>
          <Navbar onClick={this.getValue} />
        </div>
        <div id="home" style={{ display: "block" }}>
          <Home value={this.state.value} />
        </div>
        <div id="game" style={{ display: "none" }}>
          <Game />
        </div>
        <div id="account" style={{ display: "none" }}>
          <BankAppComp />
        </div>
        <div id="city" style={{ display: "none" }}>
          <CityAppComp />
        </div>
        <div id="linkedList" style={{ display: "none" }}>
          <LinkedListAppComp />
        </div>
        <div id="queueStack" style={{ display: "none" }}>
          <QueueStackAppComp />
        </div>
        <div id="context" style={{ display: "none" }}>
          <ContextAppComp />
        </div>
      </div>
    );
  }
};
export default App;
