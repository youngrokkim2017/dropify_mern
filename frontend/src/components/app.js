import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch, Route } from 'react-router-dom';
import NavBarContainer from './nav/navbar_container';
import SideBarContainer from './nav/sidebar_container';

import MainPage from './main/main_page';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';

import MusicContainer from './music/music_container';
import MusicComposeContainer from './music/music_compose_container';
import ProfileContainer from './profile/profile_container';

const App = () => (
    <div>
        <SideBarContainer />
        <NavBarContainer />
        <Switch>
            <AuthRoute exact path="/" component={MainPage} />
            <AuthRoute exact path="/login" component={LoginFormContainer} />
            <AuthRoute exact path="/signup" component={SignupFormContainer} />

            <Route exact path="/music" component={MusicContainer} />
            {/* <Route exact path="/musics" component={MusicContainer} /> */}
            <ProtectedRoute exact path="/new_music" component={MusicComposeContainer} />
            <ProtectedRoute exact path="/profile" component={ProfileContainer} />
        </Switch>
    </div>
);

export default App;