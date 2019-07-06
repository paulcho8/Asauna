import React from 'react';
import { Route, Switch, Link, withRouter } from 'react-router-dom';
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form.container';
import { AuthRoute, PrivateRoute } from '../util/route_util';
import Splash from './landing_page/landing_page';
import WorkspaceShowContainer from './workspace/workspace_show_container';

const App = () => (
    <div>
        <Switch>
            <AuthRoute path="/login" component={LogInFormContainer} />
            <AuthRoute path="/signup" component={SignUpFormContainer} />
            <Route path="/home/:workspaceId" component={WorkspaceShowContainer} />
            <AuthRoute path="/" component={Splash} />
        </Switch>
    </div>
);

export default withRouter(App);