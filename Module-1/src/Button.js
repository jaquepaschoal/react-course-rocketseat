import React, { Component } from "react";
import PropTypes from "prop-types";

const Button = props => <button onClick={props.onClick}>{props.title}</button>;

Button.defaultProps = {
  title: "Salvar"
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  title: PropTypes.string
};

export default Button;
