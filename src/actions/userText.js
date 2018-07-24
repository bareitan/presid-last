import {
    UPDATE_TEXT
  } from '../constants/action-types';

  
export const updateText = inputText => ({
    type: UPDATE_TEXT,
    payload: {inputText}
  });