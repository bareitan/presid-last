import axios from 'axios';

export const fetchAnalyze = (text, fields) => ({
  type: 'FETCH_ANALYZE',
  payload: axios.post('https://api.presidio.site/api/v1/projects/test/analyze', 
  {
    text,
    analyzeTemplate: {
      fields: fields
    }
  })
})

export const startFetchAnalyze = (text) => {
  return (dispatch, getState) => {
    let fields = []
    getState().filters.filters.map((filter)=>{
      if(filter.analyze)
      {
        fields.push({name: filter.name})
      }
      return filter
    })
    dispatch(fetchAnalyze(text, fields));
  }
}