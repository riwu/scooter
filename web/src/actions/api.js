import axios from 'axios';
import queryString from 'query-string';

axios.defaults.baseURL = '/api/';

const [get] = ['get'].map(method => (path, data) => axios({
  method,
  url: path,
  data,
}).then(response => response.data));

export const getScooters = info => get(`scooters?${queryString.stringify(info)}`);
