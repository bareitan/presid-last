import { combineReducers } from 'redux';
import input from './input';
import findingsSorting from './findingsSorting';
import findings from './findings';

export default combineReducers({
  input,
  findingsSorting,
  findings
});
