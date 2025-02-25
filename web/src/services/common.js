import http from "./base-api";

const sendMessage = async (message) => {
  const response = await http.post('/', message);
  return response.data;
}

export default {
  sendMessage
}