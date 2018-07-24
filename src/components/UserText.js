import React from 'react';
import { connect } from 'react-redux';
import { updateText } from '../actions/userText';
import { startFetchAnon } from '../actions/anonText';
import { startFetchAnalyze } from '../actions/findings';
  
const UserText = ({ inputText,onTextUpdate, analyzeError, anonymizeError }) => (
  <div>
    <p className="has-text-weight-bold">Input text:</p>
    <textarea
      onChange={onTextUpdate}
      className="textarea"
      placeholder="e.g. Copy an example text"
      rows="5"
      value={inputText}
    />
  {anonymizeError}
  {analyzeError}
  </div>
);

const mapStateToProps = state => ({
  inputText: state.userText.text,
  analyzeError: state.anonText.error,
  anonymizeError: state.findings.error
});

let timeout = null;

const mapDispatchToProps = (dispatch, ownProps) => ({
  onTextUpdate: (e) => {
    const newInput = e.target.value
    dispatch(updateText(newInput));
    clearTimeout(timeout);        
    timeout = setTimeout(()=> {
      dispatch(startFetchAnalyze(newInput));
      dispatch(startFetchAnon(newInput));
    }, 500)
  }}
);

export default connect(mapStateToProps, mapDispatchToProps)(UserText);
