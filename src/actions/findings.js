import axios from 'axios';

export const fetchAnalyze = (text) => ({
  type: 'FETCH_ANALYZE',
  payload: axios.post('https://api.presidio.site/api/v1/projects/test/analyze', 
  {
    text,
    AnalyzeTemplateId: 'test'
  })
})
