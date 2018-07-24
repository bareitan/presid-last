const initialState = {
  filters: [],
  fetching: false,
  fetched: false,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_FILTER_ANALYZE': {
      let updatedFilters = state.filters.map((filter)=>{
        if(action.payload===filter.name) {
          return Object.assign({}, filter, {
            analyze: !filter.analyze
          })          
        }
        return filter;
      })
      return {
        ...state,
        filters: updatedFilters
      }
    }
    case 'SET_ANON_PARAMS': {
      let updatedFilters = state.filters.map((filter)=>{        
        if(action.payload.filter===filter.name) {
          switch((action.payload.paramName)) {
            case 'newValue':
              console.log('value:', action.payload.paramValue)
              return Object.assign({}, filter, {
                anonymize: {
                  type: filter.anonymize.type,
                  transformation: {
                    replaceValue: {
                      newValue: action.payload.paramValue
                    }
                  }                  
                }
              })
            case 'maskingCharacter':
              return Object.assign({}, filter, {
                anonymize: {
                  type: filter.anonymize.type,
                  transformation: {
                    maskValue: {
                      maskingCharacter: action.payload.paramValue,
                      charsToMask: filter.anonymize.transformation.maskValue.charsToMask,
                      fromEnd: filter.anonymize.transformation.maskValue.fromEnd
                    }
                  }
                }
              })
            case 'charsToMask':
              return Object.assign({}, filter, {
                anonymize: {
                  type: filter.anonymize.type,
                  transformation: {
                    maskValue: {
                      maskingCharacter: filter.anonymize.transformation.maskValue.maskingCharacter,
                      charsToMask: action.payload.paramValue,
                      fromEnd: filter.anonymize.transformation.maskValue.fromEnd
                    }
                  }
                }
              })
            case 'fromEnd':
              return Object.assign({}, filter, {
                anonymize: {
                  type: filter.anonymize.type,
                  transformation: {
                    maskValue: {
                      "maskingCharacter": filter.anonymize.transformation.maskValue.maskingCharacter,
                      "charsToMask": filter.anonymize.transformation.maskValue.charsToMask,
                      "fromEnd": !filter.anonymize.transformation.maskValue.fromEnd
                    }
                  }
                }
              })
            default:
              return Object.assign({}, filter, {
                anonymize: {
                  type: action.payload.transformationType
                }
              }) 
            }
          
        }
        return filter;
      })
      return {
        ...state,
        filters: updatedFilters
      }
    }
    case 'SET_FILTER_ANONYMIZE': {
      let updatedFilters = state.filters.map((filter)=>{        
        if(action.payload.filter===filter.name) {
          switch((action.payload.transformationType)) {
            case 'replaceValue':
              return Object.assign({}, filter, {
                anonymize: {
                  type: action.payload.transformationType,
                  transformation: {
                    replaceValue: {
                      newValue: action.payload.newValue || "\u003c" + filter.name + "\u003e"
                    }
                  }                  
                }
              })
            case 'redactValue':
              return Object.assign({}, filter, {
                anonymize: {
                  type: action.payload.transformationType,
                  transformation: {
                    redactValue: {}
                  }
                  
                }
              })
            case 'hashValue':
              return Object.assign({}, filter, {
                anonymize: {
                  type: action.payload.transformationType,
                  transformation: {
                    hashValue: {}
                  }
                  
                }
              })
            case 'maskValue':
              return Object.assign({}, filter, {
                anonymize: {
                  type: action.payload.transformationType,
                  transformation: {
                    maskValue: {
                      "maskingCharacter": action.payload.maskingCharacter || "*",
                      "charsToMask": action.payload.charsToMask || 8,
                      "fromEnd": action.payload.fromEnd || false
                    }
                  }
                }
              })
            default:
              return Object.assign({}, filter, {
                anonymize: {
                  type: action.payload.transformationType
                }
              }) 
            }
          
        }
        return filter;
      })
      return {
        ...state,
        filters: updatedFilters
      }
    }
    case 'FETCH_FILTERS_PENDING': {
      return {...state, fetching: true}
    }
    case 'FETCH_FILTERS_REJECTED': {
      return {...state, fetching: false, error: action.payload}
    }
    case 'FETCH_FILTERS_FULFILLED':
      let filters = action.payload.data.map((filter)=>({
        name: filter.name,
        analyze: false,
        anonymize: {
          type: "None"          
        }
      }))
      return {
        ...state,
        filters: filters,
        fetching: false,
        fetched: true,
        error: null
      };
    default:
      return state;
  }
};
