import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3001';
axios.defaults.headers.common['Accept'] = "*"
axios.defaults.headers.common['Access-Control-Allow-Headers'] = "*"



axios.defaults.withCredentials = true;


window.axios = axios;


export default axios;