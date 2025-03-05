import axios from 'axios';

const http = axios.create({
  withCredentials:true,
  baseURL: "https://portfolio-api-umber-theta.vercel.app/api/v1"
});

export default http; 