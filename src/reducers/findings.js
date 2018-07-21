import { SET_FINDINGS } from '../constants/action-types';

const findings = (state = [], action) => {
  switch (action.type) {
    case SET_FINDINGS:
      return action.findings;
    default:
      return state;
  }
};

export default findings;
