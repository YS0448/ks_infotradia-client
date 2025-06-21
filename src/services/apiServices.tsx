import axios from 'axios';

const baseURL = import.meta.env.VITE_API_URL;

type ApiCallOptions = {
  endpoint: string;
  method?: string;
  payload?: any;
  params?: Record<string, any>; // ✅ Add this line
};

const apiCall = async ({ endpoint, method = 'GET', payload = {}, params = {} }: ApiCallOptions) => {
  try {
    const response = await axios({
      url: `${baseURL}${endpoint}`,
      method,
      data: payload,
      params, 
    });
    return response.data;
  } catch (error) {
    console.error('API call failed:', error);
    throw error;
  }
};

export default apiCall;
