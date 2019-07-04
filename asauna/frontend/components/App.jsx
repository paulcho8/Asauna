import React from 'react';
import { Route, Switch, Link, withRouter } from 'react-router-dom';
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form.container';
import HomeContainer from './greeting/home_container';
import { AuthRoute } from '../util/route_util';

const App = () => (
    <div>
        <AuthRoute exact path="/login" component={LogInFormContainer} />
        <AuthRoute exact path="/signup" component={SignUpFormContainer} />
        <Route exact path="/home" component={HomeContainer} />
    </div>
);

export default withRouter(App);