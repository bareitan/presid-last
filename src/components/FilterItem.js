import React from 'react';
import {setAnalyze, setAnonymize, setAnonParams} from '../actions/filters'
import {connect} from 'react-redux'
const FilterItem = (props) => (
  <tr>
    <td>{props.name}</td>
    <td>
      <input type="checkbox" className="checkbox" onClick={props.analyzeClicked} value={props.analyze} />
    </td>
    <td>
      <div className="select" >
        <select onChange={props.anonymizeChanged} value={props.anonymize.type}>
          <option key="None" value="None">None</option>
          <option key="hashValue" value="hashValue">Hash</option>
          <option key="replaceValue" value="replaceValue">Replace</option>
          <option key="redactValue" value="redactValue">Redact</option>
          <option key="maskValue" value="maskValue">Mask</option>
        </select>
      </div>
      {props.anonymize.type === 'replaceValue' && 
        <input onChange={props.paramsChanged} id="newValue" type="text" className="input" placeholder="New value" value={props.anonymize.transformation.replaceValue.newValue}/>
      }
      {props.anonymize.type === 'maskValue' && 
      <div>
        <input onChange={props.paramsChanged} id="maskingCharacter" type="text" className="input is-narrow" placeholder="Mask Character" maxLength="1" value={props.anonymize.transformation.maskValue.maskingCharacter}/>
        <input onChange={props.paramsChanged} id="charsToMask" type="number" className="input is-narrow" placeholder="Chars to mask" value={props.anonymize.transformation.maskValue.charsToMask}/>
        <input onChange={props.paramsChanged} id="fromEnd" type="checkbox" className="checkbox" value={props.anonymize.transformation.maskValue.fromEnd}/>From end
      </div>}

    </td>
  </tr>
)

const mapStateToProps = (state,ownProps) =>({
})
const mapDispatchToProps = (dispatch,ownProps) =>({
  analyzeClicked: (e) => dispatch(setAnalyze(ownProps.name)),
  anonymizeChanged: (e) => dispatch(setAnonymize(ownProps.name,e.target.value)),
  paramsChanged: (e) => dispatch(setAnonParams(ownProps.name, e.target.id, e.target.value))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
  )(FilterItem);