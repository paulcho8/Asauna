import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class Sidebar extends React.Component {
    constructor(props) {
        super(props)
    }
    
    componentDidMount() {
        this.props.fetchWorkspaces();
    }

    render() {
        const icon = this.props.currentUser ? (this.props.currentUser.name.split(' ').map(word => (word[0])).join('')) : ""
        const name = this.props.workspace ? (this.props.workspace.name) : ""
        let workspaceId = this.props.match.params.workspaceId
        return (
            <div className="sidebar--container">
            <div className="sidebar--title">
                <i className="fas fa-fire sidebar"></i> 
                <div className="sidebar-links--content--name">asauna</div>
            </div>
            <div className="sidebar--links">
                <Link className="sidebar--links--link" to={`/home/${workspaceId}`}>
                    <div className="sidebar--links--content">
                        <i className="fas fa-home"></i>
                        <div>Home</div>
                    </div>
                </Link>

                <Link className="sidebar--links--link" to={`/home/${workspaceId}/tasks`}>
                    <div className="sidebar--links--content">
                        <i className="fas fa-check-circle"></i>
                        <div>My Tasks</div>
                    </div>
                </Link>
            </div>

            <div className="sidebar--section">
                <div className="sidebar--workspace">
                    <div className="sidebar--workspaceName">{name}</div>
                </div>
                <div className="sidebar--teamMemberList">   
                    <div className="Avatar Avatar--small Avatar--color1 Avatar--sidebar">{icon}</div>
                    <div className="Avatar Avatar--small Avatar--colorNone Avatar--sidebar"></div>
                    <div className="Avatar Avatar--small Avatar--colorNone Avatar--sidebar"></div>
                </div>
            </div>

            <div className= "shamelessPlug">
                <a href="https://www.linkedin.com/in/paul-cho-26809a129" target="_blank">
                    <i className="fab fa-linkedin"></i>
                </a>
            </div>
        </div>
        )
    }
}

export default withRouter(Sidebar)