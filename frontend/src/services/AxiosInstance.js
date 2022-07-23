import axios from "axios";

const apiURL ="http:localhost:8080";
const axiosInstance = axios.create({
  apiURL
});

axiosInstance.interceptors.request.use((config) => {   
  return config;
});

axiosInstance.interceptors.response.use((response) => {
  return response;
});

export default axiosInstance;
