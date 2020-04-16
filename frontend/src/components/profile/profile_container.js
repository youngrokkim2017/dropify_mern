import { connect } from 'react-redux';
import { fetchUserMusic } from '../../actions/music_actions';
import Profile from './profile';

const mapStateToProps = (state) => {
    return {
        music: Object.values(state.music.user),
        currentUser: state.session.user
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchUserMusic: id => dispatch(fetchUserMusic(id))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Profile);