import { combineReducers } from 'redux';
import session from './session_reducer';
import music from './music_reducer';
import errors from './errors_reducer';

const RootReducer = combineReducers({
    session,
    music,
    errors
});

export default RootReducer;