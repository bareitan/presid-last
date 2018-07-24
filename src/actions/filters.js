import axios from 'axios';

export const fetchFilters = () => ({
  type: 'FETCH_FILTERS',
  payload: axios.get('https://api.presidio.site/api/v1/fieldTypes')
})


export const setAnalyze = (filter) => ({
  type: 'SET_FILTER_ANALYZE',
  payload: filter
})

export const setAnonymize = (filter, transformationType) => ({
  type: 'SET_FILTER_ANONYMIZE',
  payload: {
    filter,
    transformationType
  }
})

export const setAnonParams = (filter, paramName, paramValue) => ({
  type: 'SET_ANON_PARAMS',
  payload: {
    filter,
    paramName,
    paramValue
  }
})
