import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../navbar/navbar_container';
import Sidebar from '../sidebar/sidebar_container';

class WorkspaceShow extends React.Component {
    constructor(props){
        super(props)
        // this.state = {
        //     workspace: ""
        // }
    }

    componentDidMount() {
        let that = this;
        let workspaceId = this.props.match.params.workspaceId
        this.props.fetchWorkspace(workspaceId)
            // .then(workspace => that.setState({workspace: workspace}))
        // debugger;
    }
    

    render() {
        // if (this.props.workspace === undefined) return null
        debugger
        return (
            <div className="workspace--container">
                <Sidebar workspace={this.props.workspace}/>
                <Navbar />
                {/* You're in {this.props.workspace.name} */}
            </div>
        );
    }
}

export default WorkspaceShow;
