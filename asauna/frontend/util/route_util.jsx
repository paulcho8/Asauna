import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

const Auth = ({ component: Component, path, loggedIn, exact, currentUser, workspaces }) => {
    // debugger;
    return (
        <Route path={path} exact={exact} render={(props) => (
            !loggedIn ? (
                <Component {...props} />
                // <Redirect to="/login"/>
                ) : (
                // <Redirect to={"/home/" + Object.keys(workspaces)[0]} />
                <Redirect to="/home/1" />
                )
        )} />
    )
};


const mapStateToProps = state => {
    let currentUser = state.entities.users[state.session.id]
    let workspaces = state.entities.workspaces
    return { loggedIn: Boolean(state.session.id), currentUser, workspaces };
};

export const AuthRoute = withRouter(connect(mapStateToProps, null)(Auth));
