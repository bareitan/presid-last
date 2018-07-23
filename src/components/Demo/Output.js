import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const Output = ({ anonText }) => (
  <div className="white">
    <p className="has-text-weight-bold">Output text:</p>
    <div className="box white output">{anonText}</div>
  </div>
);

Output.propTypes = {
  anonText: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
  anonText: state.anonText
});

export default connect(mapStateToProps)(Output);
