import React, { Component } from "react";
import { connect } from "react-redux";

class String extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <h3>String:</h3>
        <div>{this.props.string}</div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    string: state.string,
  };
};

export default connect(mapStateToProps)(String);
