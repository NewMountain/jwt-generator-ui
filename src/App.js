import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      token: null,
      tokenValidity: "unknown"
    };
  }

  render() {
    // Backend engineer doing css, go easy on me...
    const appStyle = { marginTop: "0px", paddingTop: "0px" };
    const headerStyle = { marginTop: "0px", paddingTop: "0px", textAlign: "left" };

    const getTokenClick = () => {
      fetch("/api/jwt-generator/v1/generate-token", {
        headers: { user: "rando" }
      }).then(reply => {
        // Parse the json response
        reply.json().then(result => {
          this.setState({
            token: result.token,
            tokenValidity: "unknown"
          });
        });
      });
    };

    const testToken = () => {
      fetch("/api/jwt-generator/v1/verify-token", {
        method: "post",
        body: JSON.stringify({ token: this.state.token, user: "rando" }),
        headers: { "Content-Type": "application/json" }
      }).then(reply => {
        reply.json().then(result => {
          this.setState({ tokenValidity: result.tokenValidity });
        });
      });
    };

    return (
      <div style={appStyle}>
        <header style={headerStyle}>
          <p>Get yourself a token!</p>
        </header>
        <div>
          <p>Your token is: {this.state.token}</p>
          <p>Your token validity is: {this.state.tokenValidity}</p>
        </div>
        <br />
        <button onClick={getTokenClick}>Get a new token!</button>
        <button onClick={testToken}>Test your token</button>
      </div>
    );
  }
}

export default App;
