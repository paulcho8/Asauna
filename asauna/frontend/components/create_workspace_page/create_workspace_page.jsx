import React from "react";
import { withRouter } from 'react-router-dom';
import NewUserCreateWorkspaceContainer from './newuser_create_workspace_form_container';

class CreateWorkspacePage extends React.Component {
    constructor(props) {
        super(props)

    }

    render() {
        // debugger
        return (
            <div className="newUserWorkspaceContainer">
                <img src="../../../../CLean-desk.jpeg" className="creatformimg" width= "100%" height="100%"/>
                <div className="newWorkspace--content">
                    <NewUserCreateWorkspaceContainer ownProps={this.props}/>    
                </div>
            </div>
        )

    }
}

export default withRouter(CreateWorkspacePage)