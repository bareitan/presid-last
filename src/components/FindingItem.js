import React from 'react';

const FindingItem = ({ finding }) => (
  <tr>
    <td>{finding.field.name}</td>
    <td>{finding.probability}</td>
    <td>{finding.text}</td>
    <td>
      {finding.location.start || 0}:{finding.location.end}
    </td>
  </tr>
);

export default FindingItem;
