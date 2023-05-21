import axios from 'axios';
import jwtDecode from 'jwt-decode';

import { getEnvVariables } from '../helpers';

const { VITE_API_URL } = getEnvVariables();

const accessToken = localStorage.getItem('accessToken');
const refreshToken = localStorage.getItem('refreshToken');

const VGCApi = axios.create({
    baseURL: VITE_API_URL.VITE_API_URL,
    
});

//TODO config interceptors

VGCApi.interceptors.request.use(config => {
    config.headers = {
        ...config.headers,
        //Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
    };

    return config;
});

export default VGCApi;
