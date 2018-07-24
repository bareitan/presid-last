import axios from 'axios';

export const fetchAnon = (text, analyzeFields, anonFields) => ({
  type: 'FETCH_ANON',
  payload: axios.post('https://api.presidio.site/api/v1/projects/test/anonymize', 
    {
      text,
      analyzeTemplate: {
        fields: analyzeFields
      },
      anonymizeTemplate: {
        fieldTypeTransformations: anonFields
      }
    })
})



export const startFetchAnon = (text) => {
  return (dispatch, getState) => {
    let analyzeFields = []
    let anonFields = []

    getState().filters.filters.map((filter)=>{
      if(filter.anonymize.type !== 'None')
      {
          anonFields.push({
          fields: {
            name: filter.name
          },
          transformation: filter.anonymize.transformation          
        })
      }

      if(filter.analyze)
      {
        analyzeFields.push({name: filter.name})
      }
      return filter
    })

    console.log('analyzeFields', analyzeFields)
    console.log('anonFields', anonFields)
    dispatch(fetchAnon(text, analyzeFields, anonFields));
  }
}