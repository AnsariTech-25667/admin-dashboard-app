// api/API.js
import axios from 'axios';

const BASE_URL = 'https://api.example.com';

const api = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
});

// Interceptors for request
api.interceptors.request.use(
  config => {
    // Add authorization header or any other modifications
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

// Interceptors for response
api.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    // Handle response errors
    if (error.response && error.response.status === 401) {
      // Handle unauthorized access
      console.log('Unauthorized access - maybe redirect to login');
    }
    return Promise.reject(error);
  }
);

// API request functions
export const get = async (endpoint, params) => {
  try {
    const response = await api.get(endpoint, { params });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const post = async (endpoint, data) => {
  try {
    const response = await api.post(endpoint, data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const put = async (endpoint, data) => {
  try {
    const response = await api.put(endpoint, data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const del = async (endpoint) => {
  try {
    const response = await api.delete(endpoint);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export default api;
