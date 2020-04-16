import {
    getMusic, getUserMusic, dropMusic
} from '../util/music_api_util';

export const RECEIVE_MUSIC = 'RECEIVE_MUSIC';
export const RECEIVE_USER_MUSIC = 'RECEIVE_USER_MUSIC';
export const RECEIVE_NEW_MUSIC = 'RECEIVE_NEW_MUSIC';

export const receiveMusic = (music) => ({
    type: RECEIVE_MUSIC,
    music
});

export const receiveUserMusic = (music) => ({
    type: RECEIVE_USER_MUSIC,
    music
});

export const receiveNewMusic = (music) => ({
    type: RECEIVE_NEW_MUSIC,
    music
});

export const fetchMusic = () => dispatch => (
    getMusic()
        .then(music => dispatch(receiveMusic(music)))
        .catch(err => console.log(err))
);

export const fetchUserMusic = (id) => dispatch => (
    getUserMusic(id)
        .then(music => dispatch(receiveUserMusic(music)))
        .catch(err => console.log(err))
);

export const composeMusic = (data) => dispatch => (
    dropMusic(data)
        .then(music => dispatch(receiveNewMusic(music)))
        .catch(err => console.log(err))
);