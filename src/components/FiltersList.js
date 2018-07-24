import React from 'react';
import { connect } from 'react-redux';
import FilterItem from './FilterItem';

const FiltersList = ({filters}) => (
  <div>
    <p className="has-text-weight-bold">Filters</p>
    <table className="table">
      <thead>
        <tr>
          <th>Type</th>
          <th>Analyze</th>
          <th>Anonymize</th>
        </tr>
      </thead>
      <tbody>
      {
        filters.map((filter, id) => <FilterItem key={id} {...filter} />)
        }            
        </tbody>
    </table>
  </div>
);

const mapStateToProps = state => ({
  filters: state.filters.filters
});
export default connect(
mapStateToProps
)(FiltersList);
  
