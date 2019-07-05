import React from 'react';
import { Link, withRouter, Redirect } from 'react-router-dom';
import Workspace from '../workspace/workspace'

class Navbar extends React.Component {
    constructor(props) {
        super(props)

        this.logoutHandler = this.logoutHandler.bind(this)
    }

    componentDidMount(){
        this.props.fetchWorkspaces();
    }
    
    logoutHandler(e) {
        this.props.logout(this.props.currentUser)
            .then(() => this.props.history.push('/login'))
    }

            
    render() {
        if (this.props.workspaces.length === 0) return null;
        let workspace = this.props.workspaces.map(workspace => {
            return (
                <Workspace 
                workspace={workspace}
                key={workspace.id}/>
            )
        })

        let initials = this.props.currentUser.name.split(' ').map(word => (word[0])).join('')

        if (this.props.currentUser) {
            return(
            <div className="Topbar--container">
                <h1 className="Topbar--header">Home</h1>
                <ul>
                    { workspace }
                </ul>
                <h2 className="Topbar--button">{initials}</h2>
                <button className="header-button" onClick={this.logoutHandler}>Log Out</button>
            </div>
            )
        } else {
            return null
        }
    }
    
};

export default withRouter(Navbar);

