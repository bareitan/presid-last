const initialState = {
  findings: [],
  fetching: false,
  fetched: false,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_ANALYZE_PENDING': {
      return {...state, fetching: true}
    }
    case 'FETCH_ANALYZE_REJECTED': {
      return {...state, fetching: false, error: action.payload}
    }
    case 'FETCH_ANALYZE_FULFILLED':
      console.log('returned analyze:',action.payload.data.analyzeResults)
      return {
        ...state,
        findings: action.payload.data.analyzeResults || [],
        fetching: false,
        fetched: true,
        error: null
      };
    default:
      return state;
  }
};
