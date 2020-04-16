import axios from 'axios';

export const getMusic = () => {
    return axios.get('/api/music');
};

export const getUserMusic = (id) => {
    return axios.get(`/api/music/user/${id}`);
};

export const dropMusic = (data) => {
    return axios.post('/api/music/', data);
};