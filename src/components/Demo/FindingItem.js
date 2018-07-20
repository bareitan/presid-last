import React from "react";
import PropTypes from "prop-types";

const FindingItem = ({ finding }) => (
  <tr>
    <td>{finding.type}</td>
    <td>{finding.certainity}</td>
    <td>{finding.text}</td>
    <td>{finding.line}</td>
  </tr>
);

FindingItem.propTypes = {
  finding: PropTypes.shape({
    type: PropTypes.string.isRequired,
    certainity: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    line: PropTypes.string.isRequired
  }).isRequired
};

export default FindingItem;
