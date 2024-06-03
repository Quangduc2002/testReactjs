/* eslint-disable no-unused-vars */
import axios from 'axios';
const instance = axios.create({
    // baseURL: 'https://agiletech-test-api.zeabur.app',
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
let isRefreshing = false;
instance.interceptors.response.use(
    (response) => response,
    async (error) => {
        const originalRequest = error.config;
        if (error.response.status === 401 && !originalRequest._retry) {
            const refreshToken = localStorage.getItem('refreshToken');
            return new Promise((resolve, reject) => {
                axios
                    .post('/auth/refreshToken', { token: refreshToken })
                    .then(({ data }) => {
                        localStorage.setItem('accessToken', data.accessToken);
                        instance.defaults.headers.common['Authorization'] = `bearer ${data.accessToken}`;
                        originalRequest.headers['Authorization'] = `Bearer ${data.accessToken}`;

                        resolve(instance(originalRequest));
                    })
                    .catch((err) => {
                        reject(err);
                    })
                    .then(() => {
                        isRefreshing = false;
                    });
            });
        }

        return Promise.reject(error);
    },
);

instance.interceptors.response.use(
    function (response) {
        return response;
    },

    function (error) {},
);

export default instance;
