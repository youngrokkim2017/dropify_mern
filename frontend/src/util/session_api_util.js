import axios from 'axios';

// can pass a falsey value to the function to ensure the token will be removed
// once the user is logged out or when the token has expired

export const signup = (userData) => {
    return axios.post('/api/users/register', userData);
};

export const login = (userData) => {
    return axios.post('/api/users/login', userData);
};

// need to set the header to future axios requests
// in order to pass along the json web token to the backend
// to allow for authentication

// setAuthToken to either set or delete the common header for requests
// dependent on whether the token is passed into our method
export const setAuthToken = token => {
    if (token) {
        // if there is a token, set it as the default
        axios.defaults.headers.common['Authorization'] = token;
    } else {
        // if not, delete whatever is at that key
        delete axios.defaults.headers.common['Authorization'];
    }
};