import { connect} from 'react-redux';
import { fetchProject, updateProject, deleteProject} from '../../actions/project_actions';
import { openModal } from '../../actions/modal_actions';
import ProjectShow from './project_show';
import { fetchWorkspaces } from '../../actions/workspace_actions';
import { fetchTasks, fetchTask, deleteTask, createTask, updateTask } from '../../actions/task_actions'

const mapStateToProps = (state, ownProps) => {
    let currentUser = state.entities.users[state.session.id]
    const project = state.entities.projects[ownProps.match.params.projectId]
    let workspaceId = ownProps.match.params.workspaceId
    let workspace = state.entities.workspaces[workspaceId]
    const tasks = state.entities.tasks
    return {
        project,
        currentUser,
        workspace,
        tasks
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchProject: (id) => dispatch(fetchProject(id)),
        updateProject: (project) => dispatch(updateProject(project)),
        openModal: (modal) => dispatch(openModal(modal)),
        fetchWorkspaces: () => dispatch(fetchWorkspaces()),
        deleteProject: (id) => dispatch(deleteProject(id)),
        fetchTasks: (workspace_id) => dispatch(fetchTasks(workspace_id)),
        fetchTask: (id) => dispatch(fetchTask(id)),
        deleteTask: (id) => dispatch(deleteTask(id)),
        createTask: (task) => dispatch(createTask(task)),
        updateTask: (task) => dispatch(updateTask(task)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectShow)