import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: `http://localhost:5000/`,
});

axiosInstance.interceptors.response.use(
  function (response) {
    return response.data;
  },
  function (error) {
    return Promise.reject(error);
  },
);

export default axiosInstance;
