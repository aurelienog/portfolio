import axios from 'axios';

const http = axios.create({
  baseURL: "https://portfolio-server-rho-amber.vercel.app/api/v1",
  withCredentials:true
});

export default http; 