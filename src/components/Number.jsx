import React, { Component } from "react";
import { connect } from "react-redux";

class Number extends Component {
  state = {};

  handleClick = () => {
    let char = document.getElementById("char").value;
    this.props.concat(char);
  };
  render() {
    return (
      <React.Fragment>
        <h3>Number:</h3>
        <div>{this.props.number}</div>
        <input type="string" id="char" />
        <button onClick={this.handleClick}>Add Character</button>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    number: state.number,
  };
};

const mapDispatchToProps = {
  concat: (c) => {
    return {
      type: "concat",
      char: c,
    };
  },
};

export default connect(mapStateToProps, mapDispatchToProps)(Number);
