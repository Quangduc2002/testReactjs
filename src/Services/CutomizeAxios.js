/* eslint-disable no-unused-vars */
import { axiosPost } from './UseServices';

import axios from 'axios';
const instance = axios.create({
    baseURL: 'https://api-test-web.agiletech.vn',
});

instance.defaults.headers.common['Authorization'] = `bearer ${localStorage.accessToken}`;
instance.interceptors.request.use(
    function (config) {
        return config;
    },
    function (error) {
        return Promise.reject(error);
    },
);

// instance.interceptors.response.use(
//     (response) => response,
//     async (error) => {
//         const originalRequest = error.config;
//         console.log(originalRequest._retry);
//         if (error.response && error.response.status === 403 && originalRequest._retry !== true) {
//             const refreshToken = localStorage.getItem('refreshToken');
//             originalRequest._retry = true;
//             try {
//                 const { data } = await instance.post('/auth/refresh-token', { refreshToken });

//                 localStorage.setItem('accessToken', data.accessToken);
//                 localStorage.setItem('refreshToken', data.refreshToken);

//                 instance.defaults.headers.common['Authorization'] = `Bearer ${data.accessToken}`;

//                 return instance(originalRequest);
//             } catch (refreshError) {
//                 return Promise.reject(refreshError);
//             }
//         }

//         return Promise.reject(error);
//     },
// );

export default instance;
