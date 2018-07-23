import React from 'react';
import PropTypes from 'prop-types';

const FindingItem = ({ finding }) => (
  <tr>
    <td>{finding.field.name}</td>
    <td>{finding.probability}</td>
    <td>{finding.text}</td>
    <td>
      {finding.location.start}:{finding.location.end}
    </td>
  </tr>
);

FindingItem.propTypes = {
  finding: PropTypes.shape({
    probability: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    location: PropTypes.shape({
      start: PropTypes.number.isRequired,
      end: PropTypes.number.isRequired,
      length: PropTypes.number.isRequired
    }).isRequired
  }).isRequired
};

export default FindingItem;
