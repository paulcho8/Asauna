import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { fetchWorkspaces, updateWorkspace, createWorkspace } from '../../actions/workspace_actions';
import React from 'react';
import { openModal } from '../../actions/modal_actions';
import Navbar from './navbar';

const mapStateToProps = ({ session, entities: { users, workspaces } }) => {
    // debugger
    return {
        currentUser: users[session.id],
        workspaces: workspaces
    };
};

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout()),
    fetchWorkspaces: () => dispatch(fetchWorkspaces()),

    openModal: (modal) => dispatch(openModal(modal)),

    // createWorkspace: (workspace) => dispatch(createWorkspace(workspace)),
    // updateWorkspace: (workspace) => dispatch(updateWorkspace(workspace)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Navbar);
