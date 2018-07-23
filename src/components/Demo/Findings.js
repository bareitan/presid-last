import React from 'react';
import PropTypes from 'prop-types';
import FindingItem from './FindingItem';
import { FindingsSorting } from '../../actions/index';

const Findings = ({ onSortClick, findings }) => (
  <div>
    <p className="has-text-weight-bold">Findings: </p>
    <table className="table is-striped is-narrow is-hoverable is-fullwidth">
      <thead>
        <tr>
          <th>
            <a onClick={() => onSortClick(FindingsSorting.SORT_TYPE)}>
              <span className="icon">
                <i className="fas fa-sort fa-fw" />
                Type
              </span>
            </a>
          </th>
          <th>
            <a onClick={() => onSortClick(FindingsSorting.SORT_CERTAINITY)}>
              <span className="icon">
                <i className="fas fa-sort fa-fw" />
                Score
              </span>
            </a>
          </th>
          <th>
            <a onClick={() => onSortClick(FindingsSorting.SORT_TEXT)}>
              <span className="icon">
                <i className="fas fa-sort fa-fw" />
                Text
              </span>
            </a>
          </th>
          <th>
            <a onClick={() => onSortClick(FindingsSorting.SORT_LINE)}>
              <span className="icon">
                <i className="fas fa-sort fa-fw" />
                Line
              </span>
            </a>
          </th>
        </tr>
      </thead>
      <tbody>
        {findings.map((finding,id) => (
          <FindingItem key={id} finding={finding} />
        ))}
      </tbody>
    </table>
  </div>
);

Findings.propTypes = {
  onSortClick: PropTypes.func.isRequired,
  findings: PropTypes.arrayOf(
    PropTypes.shape({
      probability: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      location: PropTypes.shape({
        start: PropTypes.number.isRequired,
        end: PropTypes.number.isRequired,
        length: PropTypes.number.isRequired
      })
    })
  ).isRequired
};

export default Findings;
