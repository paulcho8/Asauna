import { connect } from 'react-redux';
import React from 'react';
import { updateWorkspace } from '../../actions/workspace_actions';
import { fetchWorkspace, fetchWorkspaces } from '../../actions/workspace_actions';
import WorkspaceForm from './workspace_form';
import { openModal, closeModal } from '../../actions/modal_actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
    const urlParts = ownProps.location.pathname.split("/")
    const workspaceId = urlParts[urlParts.length - 1]
    return {
        workspaceId,
        workspace: state.entities.workspaces[workspaceId],
        formType: "Edit Workspace"
    };  
};

const mapDispatchToProps = dispatch => ({
    fetchWorkspace: (id) => dispatch(fetchWorkspace(id)),
    action: (workspace) => dispatch(updateWorkspace(workspace)),
    openModal: (modal) => dispatch(openModal(modal)),
    closeModal: () => dispatch(closeModal()),
    fetchWorkspaces: () => dispatch(fetchWorkspaces())
});

class EditWorkspaceForm extends React.Component {
    componentDidMount() {
        // const workspaceId = this.props.location.pathname.includes("tasks") ? this.props.location.pathname.split("/")[2] : this.props.match.params.workspaceId
        const workspaceId = this.props.match.params.workspaceId
        this.props.fetchWorkspace(workspaceId)
        this.props.fetchWorkspaces();
    }

    render() {
        debugger
        const { action, formType, workspace, closeModal } = this.props;
        return (
            <WorkspaceForm
                action={action}
                formType={formType}
                workspace={workspace}
                closeModal={closeModal}
            />
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(EditWorkspaceForm));
