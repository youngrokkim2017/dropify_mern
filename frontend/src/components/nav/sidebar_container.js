import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';

import SideBar from './sidebar';

const mapStateToProps = state => ({
    loggedIn: state.session.isAuthenticated
});

export default connect(
    mapStateToProps,
    { logout }
)(SideBar);