import React from 'react';
import { Link, withRouter, Redirect } from 'react-router-dom';

class Home extends React.Component {
    constructor(props) {
        super(props)

        this.logoutHandler = this.logoutHandler.bind(this)
    }
    
    logoutHandler(e) {
        this.props.logout(this.props.currentUser)
            .then(() => this.props.history.push('/login'))
    }
    
            
    render() {
        if (this.props.currentUser) {
            return(
            <div>
                <h2 className="header-name">Hi, {this.props.currentUser.name}!</h2>
                <button className="header-button" onClick={this.logoutHandler}>Log Out</button>
            </div>
            )
        } else {
            return null
        }
    }
    
};

export default withRouter(Home);

