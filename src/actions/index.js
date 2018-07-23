import axios from 'axios';
import {
  UPDATE_TEXT,
  SET_SORTING,
  SET_FINDINGS,
  UPDATE_ANON_TEXT,
  SET_FILTERS
} from '../constants/action-types';

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

export const fetchAnalyzed = (text = '') => dispatch =>
  axios
    .post('https://api.presidio.site/api/v1/projects/test/analyze', {
      text,
      AnalyzeTemplateId: 'test'
    })
    .then(res => {
      if (res.data.analyzeResults) {
        dispatch(setFindings(res.data.analyzeResults));
      } else {
        dispatch(setFindings([]));
      }
    });

export const updateAnonymizedText = text => ({
  type: UPDATE_ANON_TEXT,
  text
});

export const fetchAnonimyzed = (text = '') => dispatch =>
  axios
    .post('https://api.presidio.site/api/v1/projects/test/anonymize', {
      text,
      AnalyzeTemplateId: 'test',
      AnonymizeTemplateId: 'anon1'
    })
    .then(res => {
      dispatch(updateAnonymizedText(res.data.text));
    });

export const updateText = inputText => ({
  type: UPDATE_TEXT,
  inputText,
  lastUpdated: Date.now()
});

export const setFilters = filters => ({
  type: SET_FILTERS,
  filters
});

export const fetchFilters = (filters = []) => dispatch =>
  axios
    .post('https://api.presidio.site/api/v1/fieldTypes')
    .then(res => {
      dispatch(setFilters(res.data));
    });