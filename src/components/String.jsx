import React, { Component } from "react";
import { connect } from "react-redux";

class String extends Component {
  state = {};

  handleAddClick = () => {
    let number = document.getElementById("number").value;
    this.props.add(parseInt(number));
  };
  handleSubClick = () => {
    let number = document.getElementById("number").value;
    this.props.sub(parseInt(number));
  };
  render() {
    return (
      <React.Fragment>
        <h3>String:</h3>
        <div>{this.props.string}</div>
        <input type="number" id="number" />
        <button onClick={this.handleAddClick}>Add Number</button>
        <button onClick={this.handleSubClick}>Sub Number</button>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    string: state.string,
  };
};

const mapDispatchToProps = {
  add: (number) => {
    return {
      type: "add",
      value: number,
    };
  },
  sub: (number) => {
    return {
      type: "sub",
      value: number,
    };
  },
};

export default connect(mapStateToProps, mapDispatchToProps)(String);
