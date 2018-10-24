import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { token: null };
  }

  render() {
    // Backend engineer doing css, go easy on me...
    const appStyle = { marginTop: "0px", paddingTop: "0px" };
    const headerStyle = { marginTop: "0px", paddingTop: "0px", textAlign: "left" };
    return (
      <div style={appStyle}>
        <header style={headerStyle}>
          <p>Get yourself a token!</p>
        </header>
        <div>
          <p>Your token is: {this.state.token}</p>
        </div>
        <br />
        <button>Get a new token!</button>
      </div>
    );
  }
}

export default App;
