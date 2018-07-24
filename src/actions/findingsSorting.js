import {
  SET_SORTING
} from '../constants/action-types';

export const setFindingsSorting = sorting => ({
    type: SET_SORTING,
    sorting
  });
  
  
  export const FindingsSorting = {
    SORT_CERTAINITY: 'SORT_CERTAINITY',
    SORT_TYPE: 'SORT_TYPE',
    SORT_TEXT: 'SORT_TEXT',
    SORT_LINE: 'SORT_LINE'
  };
  
  
  