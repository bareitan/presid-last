import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { updateText, fetchAnonimyzed, fetchAnalyzed } from '../../actions/index';

const Input = ({ dispatch, input }) => (
  <div>
    <p className="has-text-weight-bold">Input text:</p>
    <textarea
      onChange={e => {
        dispatch(updateText(e.target.value));
        dispatch(fetchAnalyzed(e.target.value));
        dispatch(fetchAnonimyzed(e.target.value));
      }}
      className="textarea"
      placeholder="e.g. Copy an example text"
      rows="5"
      value={input}
    />
  </div>
);

Input.propTypes = {
  dispatch: PropTypes.func.isRequired,
  input: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
  input: state.input
});

export default connect(mapStateToProps)(Input);
