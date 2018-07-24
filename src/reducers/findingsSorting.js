import { FindingsSorting } from '../actions/findingsSorting';
import { SET_SORTING } from '../constants/action-types';

const initialState = FindingsSorting.SORT_CERTAINITY;

const findingsSorting = (state = initialState, action) => {
  switch (action.type) {
    case SET_SORTING:
      return action.sorting;
    default:
      return state;
  }
};

export default findingsSorting;
