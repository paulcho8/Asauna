import { connect } from 'react-redux';
import { createWorkspace } from '../../actions/workspace_actions';
import CreateWorkspacePage from './create_workspace_page';
import { openModal, closeModal } from '../../actions/modal_actions';

const mapStateToProps = ({ session, entities: { users, workspaces } }) => {
    return {
        currentUser: users[session.id],
        workspaces: Object.values(workspaces)
    };
};

const mapDispatchToProps = dispatch => ({
    closeModal: () => dispatch(closeModal()),
    openModal: (modal) => dispatch(openModal(modal)),
    createWorkspace: (workspace) => dispatch(createWorkspace(workspace)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CreateWorkspacePage);