import {
    RECEIVE_MUSIC,
    RECEIVE_USER_MUSIC,
    RECEIVE_NEW_MUSIC
} from '../actions/music_actions';

const MusicReducer = (state = { all: {}, user: {}, new: undefined }, action) => {
    Object.freeze(state);

    let newState = Object.assign({}, state);

    switch (action.type) {
        case RECEIVE_MUSIC:
            newState.all = action.music.data;
            return newState;
        case RECEIVE_USER_MUSIC:
            newState.user = action.music.data;
            return newState;
        case RECEIVE_NEW_MUSIC:
            newState.new = action.music.data;
            return newState;
        default:
            return state;
    };
};

export default MusicReducer;