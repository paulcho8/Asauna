import React from 'react';
import { Link, withRouter, Redirect } from 'react-router-dom';


class Splash extends React.Component {


    render () {
        return (
            <div>
                Splash coming soon! ^_^
                <br/>
                <Link to={`/login`}>Log In</Link>
                &nbsp;
                &nbsp;
                <Link to={`/signup`}>Sign Up</Link>
            </div>
        )
    }
}

export default Splash