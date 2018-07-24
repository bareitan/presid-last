import axios from 'axios';

export const fetchFilters = () => ({
  type: 'FETCH_FILTERS',
  payload: axios.post('https://api.presidio.site/api/v1/fieldTypes')
})
