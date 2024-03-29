import { connect } from 'react-redux';
import { createWorkspace } from '../../actions/workspace_actions';
import WorkspaceForm from './newuser_workspace_form';
import { closeModal } from '../../actions/modal_actions';

const mapStateToProps = (state) => {
    return {
        workspace: {name: "", description: ""},
        formType: "Create Workspace"
    };
};

const mapDispatchToProps = dispatch => ({
    action: (workspace) => dispatch(createWorkspace(workspace)),
    closeModal: () => dispatch(closeModal())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(WorkspaceForm);
