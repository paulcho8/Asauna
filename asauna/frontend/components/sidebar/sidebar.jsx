import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class Sidebar extends React.Component {
    constructor(props) {
        super(props)
        // debugger
    }
    
    componentDidMount() {
        // debugger
        this.props.fetchWorkspaces();
    }

    render() {
        // debugger
        let workspaceId = this.props.match.params.workspaceId
        // debugger
        return (
            <div>
                {this.props.workspace.name}
                <Link to={`/home/${workspaceId}`}>Home</Link>
            </div>
        )
    }
}

export default withRouter(Sidebar)