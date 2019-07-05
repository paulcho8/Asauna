import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../navbar/navbar_container';

class WorkspaceShow extends React.Component {

    componentDidMount() {
        let workspaceId = this.props.match.params.workspaceId
        this.props.fetchWorkspace(workspaceId)
    }

    render() {
        return (
            <div>
                <Navbar />
                <Link to="/home">Workspace Index</Link>
            </div>
        );
    }
}

export default WorkspaceShow;
