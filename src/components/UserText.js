import React from 'react';
import { connect } from 'react-redux';
import { updateText } from '../actions/userText';
import { fetchAnon } from '../actions/anonText';
import { fetchAnalyze } from '../actions/findings';


  
const UserText = ({ dispatch, inputText,onTextUpdate }) => (
  <div>
    <p className="has-text-weight-bold">Input text:</p>
    <textarea
      onChange={onTextUpdate}
      className="textarea"
      placeholder="e.g. Copy an example text"
      rows="5"
      value={inputText}
    />
  </div>
);

const mapStateToProps = state => ({
  inputText: state.userText.text
});

let timeout = null;

const mapDispatchToProps = dispatch => ({
  onTextUpdate: (e) => {
    const newInput = e.target.value
    dispatch(updateText(newInput));
    clearTimeout(timeout);        
    timeout = setTimeout(()=> {
      dispatch(fetchAnalyze(newInput));
      dispatch(fetchAnon(newInput));
    }, 500)
  }}
);

export default connect(mapStateToProps, mapDispatchToProps)(UserText);
