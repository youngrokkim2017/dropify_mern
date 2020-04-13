import axios from 'axios';

// setAuthToken to either set or delete the common header for requests
// dependent on whether the token is passed into our method
export const setAuthToken = token => {
    if (token) {
        axios.defaults.headers.common['Authorization'] = token;
    } else {
        delete axios.defaults.headers.common['Authorization'];
    }
};

// can pass a falsey value to the function to ensure the token will be removed
// once the user is logged out or when the token has expired

export const signup = (userData) => {
    return axios.post('/api/users/register', userData);
};

export const login = (userData) => {
    return axios.post('/api/users/login', userData);
};