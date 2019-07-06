import React from 'react';
import { Link, withRouter, Redirect } from 'react-router-dom';
import WorkspaceIndex from '../workspace/workspace_index'

class Navbar extends React.Component {
    constructor(props) {
        super(props)

        this.logoutHandler = this.logoutHandler.bind(this)
        this.showDropdown = this.showDropdown.bind(this)
        this.hideDropdown = this.hideDropdown.bind(this)

        this.state = {
            displayBar: false,
        };
    }

    showDropdown(e) {
        e.preventDefault();
        this.setState({ displayBar: true }, () => {
            document.addEventListener('click', this.hideDropdown);
        })
    }

    hideDropdown() {
        this.setState({ displayBar: false }, () => {
            document.removeEventListener('click', this.hideDropdown);
        })
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
                <WorkspaceIndex 
                workspace={workspace}
                key={workspace.id}/>
            )
        })

        
        if (this.props.currentUser) {
            let initials = this.props.currentUser.name.split(' ').map(word => (word[0])).join('')
            return(
            <div className="Topbar--container">
                <h1 className="Topbar--header">Home</h1>
                    <div className="Avatar Avatar--small Avatar--color1 Topbar--button" onClick={ this.showDropdown }>{initials}</div>
                { this.state.displayBar ? (
                    <ul className="menuBar">
                        <span className="menuItem--content--outer">{workspace}</span>
                        <span className="menuItem--content" onClick={this.logoutHandler}>
                            <div className="filler"></div>
                            <div className="filler"></div>
                            &nbsp;
                            &nbsp;
                            Log Out
                        </span>
                    </ul>
                ) : (null)
                }
            </div>
            )
        } else {
            return null
        }
    }
    
};

export default withRouter(Navbar);

