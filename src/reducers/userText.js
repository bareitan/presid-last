import { UPDATE_TEXT } from '../constants/action-types';

const initialState = {
    text: ''
};

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_TEXT:
      return {
        ...state,
        text: action.payload.inputText
      };
    default:
      return state;
  }
};