import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const Output = ({ output }) => (
  <div className="white">
    <p className="has-text-weight-bold">Output text:</p>
    <div className="box white output">{output}</div>
  </div>
);

Output.propTypes = {
  output: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
  output: state.input
});

export default connect(mapStateToProps)(Output);
