import axios, { AxiosInstance } from 'axios';

const apiClient: AxiosInstance = axios.create({
  baseURL: 'https://www.mechta.kz/',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default apiClient;