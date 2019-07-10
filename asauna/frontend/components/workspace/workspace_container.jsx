import { connect } from 'react-redux';
import { fetchWorkspace, updateWorkspace, createWorkspace } from '../../actions/workspace_actions';
import { fetchProjects, createProject } from '../../actions/project_actions';
import { openModal } from '../../actions/modal_actions';
import Workspace from './workspace'

const mapStateToProps = (state, ownProps) => {
    let workspaceId = ownProps.match.params.workspaceId
    let currentUser = state.entities.users[state.session.id]
    return {
        currentUser,
        workspace: state.entities.workspaces[workspaceId] || {},
        projects: Object.values(state.entities.projects)
    }
};

const mapDispatchToProps = dispatch => ({
    openModal: (modal) => dispatch(openModal(modal)),
    fetchWorkspace: (id) => dispatch(fetchWorkspace(id)),
    createWorkspace: (workspace) => dispatch(createWorkspace(workspace)),
    fetchProjects: (workspaceId) => dispatch(fetchProjects(workspaceId)),
    createProject: (project) => dispatch(createProject(project)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Workspace);
