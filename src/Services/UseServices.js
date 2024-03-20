import baseURL from './CutomizeAxios';

function axiosGet(url) {
    return baseURL.get(url);
}

function axiosDelete(url) {
    return baseURL.delete(url);
}

function axiosPatch(url, action) {
    return baseURL.patch(url, action);
}

function axiosPost(url, action) {
    return baseURL.post(url, action);
}

export { axiosGet, axiosDelete, axiosPatch, axiosPost };
