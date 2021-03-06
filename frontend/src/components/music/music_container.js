import { connect } from 'react-redux';
import { fetchMusic } from '../../actions/music_actions';
import Music from './music';

const mapStateToProps = (state) => {
    return {
        music: Object.values(state.music.all)
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchMusic: () => dispatch(fetchMusic())
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Music);