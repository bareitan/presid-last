import { UPDATE_TEXT } from '../constants/action-types';

const initialState = 'Some dummy text';

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_TEXT:
      return action.inputText;
    default:
      return state;
  }
};