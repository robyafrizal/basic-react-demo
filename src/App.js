import React from "react";
import logo from "./logo.svg";
import "./App.css";
import MaherMusic from "./assets/maher.m4a";

import { DisplayInformation } from "./components/dispayInformation";

//STATEFUL COMPONENT
//PARENT COMPONENT
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      information: "Edit src/App.js and save to reload."
    };
  }
  render() {
    return (
      <div className="App">
        <audio src={MaherMusic} autoPlay />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

          {/* CHILD COMPONENT */}
          <DisplayInformation information={this.state.information} />

          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Incredible Igneel
          </a>
        </header>
      </div>
    );
  }
}

export default App;
