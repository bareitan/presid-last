import React from "react";
import { connect } from "react-redux";

const AnonOutput = ({ anonText }) => (
  <div className="white">
    <p className="has-text-weight-bold">Output text:</p>
    <div className="white output">{anonText}</div>
  </div>
);

const mapStateToProps = state => ({
  anonText: state.anonText.text
});

export default connect(mapStateToProps)(AnonOutput);
