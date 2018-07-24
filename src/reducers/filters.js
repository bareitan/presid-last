const initialState = {
  filters: ['Credit_Card','Phone Number'],
  fetching: false,
  fetched: false,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_FILTERS_PENDING': {
      return {...state, fetching: true}
    }
    case 'FETCH_FILTERS_REJECTED': {
      return {...state, fetching: false, error: action.payload}
    }
    case 'FETCH_FILTERS_FULFILLED':
      return {
        ...state,
        filters: action.payload.data.filters,
        fetching: false,
        fetched: true,
        error: null
      };
    default:
      return state;
  }
};
