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

instance.interceptors.response.use(
    function (response) {
        return response;
    },

    function (error) {},
);

export default instance;
