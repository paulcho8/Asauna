import React from 'react';
import { Link, withRouter, Redirect } from 'react-router-dom';


class Splash extends React.Component {


    render () {
        return (
            <div>
                hello
                <Link to={`/login`}>Log In</Link>
                <Link to={`/signup`}>Sign Up</Link>
            </div>
        )
    }
}

export default Splash