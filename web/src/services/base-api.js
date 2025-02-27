import axios from 'axios';

const http = axios.create({
  baseURL: 'https://aurelie-nogueira.vercel.app/api/v1'
})

export default http;