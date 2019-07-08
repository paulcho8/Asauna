import { connect } from 'react-redux';
import React from 'react';
import { updateWorkspace } from '../../actions/workspace_actions';
import { fetchWorkspace } from '../../actions/workspace_actions';
import WorkspaceForm from './workspace_form';
import { openModal, closeModal } from '../../actions/modal_actions';

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
    closeModal: () => dispatch(closeModal())
});

class EditWorkspaceForm extends React.Component {
    componentDidMount() {
        const workspaceId = this.props.workspaceId
        this.props.fetchWorkspace(workspaceId);
    }

    render() {
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
)(EditWorkspaceForm);
