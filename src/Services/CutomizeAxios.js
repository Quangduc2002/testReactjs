/* eslint-disable no-unused-vars */
import axios from 'axios';
const instance = axios.create({
    baseURL: 'https://api-test-web.agiletech.vn',
});

// instance.defaults.headers.common['Authorization'] = `bearer ${localStorage.accessToken}`;
instance.interceptors.request.use(
    function (config) {
        config.headers.Authorization = `bearer ${localStorage.accessToken}`;
        return config;
    },
    function (error) {
        return Promise.reject(error);
    },
);

instance.interceptors.response.use(
    (response) => response,
    async (error) => {
        const originalRequest = error.config;

        if (error.response && error.response.status === 403) {
            const refreshToken = localStorage.getItem('refreshToken');
            try {
                const { data } = await instance.post('/auth/refresh-token', { refreshToken });
                localStorage.setItem('accessToken', data.accessToken);
                localStorage.setItem('refreshToken', data.refreshToken);
                instance.defaults.headers.common['Authorization'] = `Bearer ${data.accessToken}`;

                return instance(originalRequest);
            } catch (refreshError) {
                return Promise.reject(refreshError);
            }
        }

        return Promise.reject(error);
    },
);

export default instance;
