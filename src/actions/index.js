import {
  UPDATE_TEXT,
  SET_SORTING,
  SET_FINDINGS
} from '../constants/action-types';

export const updateText = inputText => ({
  type: UPDATE_TEXT,
  inputText
});

export const setFindingsSorting = sorting => ({
  type: SET_SORTING,
  sorting
});
export const setFindings = findings => ({
  type: SET_FINDINGS,
  findings
});

export const FindingsSorting = {
  SORT_CERTAINITY: 'SORT_CERTAINITY',
  SORT_TYPE: 'SORT_TYPE',
  SORT_TEXT: 'SORT_TEXT',
  SORT_LINE: 'SORT_LINE'
};
