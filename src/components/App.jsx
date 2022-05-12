import React, { Component } from "react";
import String from "./String";
import Number from "./Number";

class App extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Number />
        <hr />
        <String />
      </React.Fragment>
    );
  }
}

export default App;
