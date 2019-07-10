import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { fetchWorkspaces, updateWorkspace, createWorkspace } from '../../actions/workspace_actions';
import React from 'react';
import { openModal } from '../../actions/modal_actions';
import ProjectNavbar from './project_navbar';
import { fetchProject } from '../../actions/project_actions';

const mapStateToProps = ({ session, entities: { users, workspaces } }) => {
    return {
        currentUser: users[session.id],
        workspaces: Object.values(workspaces)
    };
};

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout()),
    fetchWorkspaces: () => dispatch(fetchWorkspaces()),
    fetchProject: (id) => dispatch(fetchProject()),
    openModal: (modal) => dispatch(openModal(modal)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProjectNavbar);
