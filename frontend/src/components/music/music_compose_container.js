import { connect } from 'react-redux';
import { composeMusic } from '../../actions/music_actions';
import MusicCompose from './music_compose';

const mapStateToProps = (state) => {
    return {
        currentUser: state.session.user,
        newMusic: state.music.new
    };
};

mapDispatchToProps = dispatch => {
    return {
        composeMusic: data => dispatch(composeMusic(data))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MusicCompose);