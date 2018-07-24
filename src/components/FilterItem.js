import React from 'react';

const FilterItem = ({ filter }) => (
  <tr>
    <td>{filter}</td>
    <td>
      <input type="checkbox" className="checkbox" />
    </td>
    <td>
      <input type="checkbox" className="checkbox" />
    </td>
  </tr>
)

export default FilterItem;
