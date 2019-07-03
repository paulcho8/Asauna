import React from 'react';
import {Route, Switch, Link} from 'react-router-dom';

const App = () => (
    <div>
        <AuthRoute exact path="/login" component={LogInFormContainer} />
        <AuthRoute exact path="/signup" component={SignUpFormContainer} />
    </div>
);

export default App;