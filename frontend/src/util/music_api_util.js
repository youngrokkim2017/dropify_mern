import axios from 'axios';

export const getMusic = () => {
    return axios.get('/api/musics');
};

export const getUserMusic = (id) => {
    return axios.get(`/api/musics/user/${id}`);
};

export const dropMusic = (data) => {
    return axios.post('/api/musics/', data);
};