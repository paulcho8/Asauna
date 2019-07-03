import React from 'react';
import {Route, Switch, Link} from 'react-router-dom';
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form.container';

const App = () => (
    <div>
        <Route exact path="/login" component={LogInFormContainer} />
        <Route exact path="/signup" component={SignUpFormContainer} />
    </div>
);

export default App;