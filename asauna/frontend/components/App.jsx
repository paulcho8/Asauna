import React from 'react';
import { Route, Switch, Link, withRouter } from 'react-router-dom';
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form.container';
import HomeContainer from './home/home_container';
import { AuthRoute, PrivateRoute } from '../util/route_util';
import Splash from './landing_page/landing_page';

const App = () => (
    <div>
        {/* <Route path="/" component={Splash} /> */}
        <AuthRoute exact path="/login" component={LogInFormContainer} />
        <AuthRoute exact path="/signup" component={SignUpFormContainer} />
        <Route exact path="/home" component={HomeContainer} />
        <Link to={`/login`}>Log In</Link>
        &nbsp;
        &nbsp;
        <Link to={`/signup`}>Sign Up</Link>
    </div>
);

export default withRouter(App);