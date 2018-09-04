import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

class Main extends Component {
  state = {
    repositoryInput: ""
  };

  render() {
    return (
      <Fragment>
        <h1>Ola</h1>
      </Fragment>
    );
  }
}

export default Main;
