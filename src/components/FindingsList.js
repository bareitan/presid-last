import React from 'react';
import FindingItem from './FindingItem';
import { FindingsSorting } from '../actions/findingsSorting';
import { connect } from 'react-redux';
import { setFindingsSorting } from '../actions/findingsSorting';

const FindingsList = ({ onSortClick, findings }) => (
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
                Start:End
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
const getSortedFindings = (findings, findingsSorting) => {
  switch (findingsSorting) {
    case FindingsSorting.SORT_TYPE:
      return [...findings].sort((a, b) => (a.field.name > b.field.name ? 1 : -1));
    case FindingsSorting.SORT_CERTAINITY:
      return [...findings].sort((a, b) => (a.probability < b.probability ? 1 : -1));
    case FindingsSorting.SORT_TEXT:
      return [...findings].sort((a, b) => (a.text > b.text ? 1 : -1));
    case FindingsSorting.SORT_LINE:
      return [...findings].sort((a, b) => (a.location.start > b.location.start ? 1 : -1));
    default:
      throw new Error(`Unknown filter: $(findingsSorting)`);
  }
}

const mapStateToProps = state => ({
  findings: getSortedFindings(state.findings.findings, state.findingsSorting)
});

const mapDispatchToProps = dispatch => ({
  onSortClick: sorting => {
    dispatch(setFindingsSorting(sorting));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FindingsList);
