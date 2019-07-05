import React from 'react';
import { Route, Switch, Link, withRouter } from 'react-router-dom';
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form.container';
import HomeContainer from './home/home_container';
import { AuthRoute, PrivateRoute } from '../util/route_util';
import Splash from './landing_page/landing_page';

const App = () => (
    <div>
        <Switch>
            <AuthRoute path="/login" component={LogInFormContainer} />
            <AuthRoute path="/signup" component={SignUpFormContainer} />
            <Route path="/home" component={HomeContainer} />
            <AuthRoute path="/" component={Splash} />
        </Switch>
    </div>
);

export default withRouter(App);