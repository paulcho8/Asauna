import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { fetchWorkspaces, updateWorkspace, createWorkspace } from '../../actions/workspace_actions';
import Navbar from './navbar';

const mapStateToProps = ({ session, entities: { users, workspaces } }) => {
    return {
        currentUser: users[session.id],
        workspaces: Object.values(workspaces)
    };
};

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout()),
    fetchWorkspaces: () => dispatch(fetchWorkspaces()),
    createWorkspace: (workspace) => dispatch(createWorkspace(workspace)),
    updateWorkspace: (workspace) => dispatch(updateWorkspace(workspace)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Navbar);
