import axios from 'axios';

export const fetchAnon = (text) => ({
  type: 'FETCH_ANON',
  payload: axios.post('https://api.presidio.site/api/v1/projects/test/anonymize', 
    {
      text,
      AnalyzeTemplateId: 'test',
      AnonymizeTemplateId: 'anon1'
    })
})
