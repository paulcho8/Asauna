import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../navbar/navbar_container';

class WorkspaceShow extends React.Component {

    componentDidMount() {
        let workspaceId = this.props.match.params.workspaceId
        this.props.fetchWorkspace(workspaceId)
    }

    render() {
        // if (this.props.workspace === undefined) return null
        return (
            <div>
                <Navbar />
                {/* You're in {this.props.workspace.name} */}
            </div>
        );
    }
}

export default WorkspaceShow;
