const initialState = {
  text: '',
  fetching: false,
  fetched: false,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_ANON_PENDING': {
      return {...state, fetching: true}
    }
    case 'FETCH_ANON_REJECTED': {
      return {...state, fetching: false, error: action.payload}
    }
    case 'FETCH_ANON_FULFILLED':
      return {
        ...state,
        text: action.payload.data.text,
        fetching: false,
        fetched: true,
        error: null
      };
    default:
      return state;
  }
};
