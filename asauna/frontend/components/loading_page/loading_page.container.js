import { connect } from 'react-redux';
import { fetchWorkspaces, createWorkspace } from '../../actions/workspace_actions';
import LoadingPage from './loading_page';
import { logout } from '../../actions/session_actions';

const mapStateToProps = ({ session, entities: { users, workspaces } }) => {
    return {
        currentUser: users[session.id],
        workspaces: Object.values(workspaces)
    };
};

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout()),
    createWorkspace: (workspace) => dispatch(createWorkspace(workspace)),
    fetchWorkspaces: () => dispatch(fetchWorkspaces()),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LoadingPage);