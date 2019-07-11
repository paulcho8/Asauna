import { connect } from 'react-redux';
import { fetchTasks, fetchTask, deleteTask, createTask, updateTask } from '../../actions/task_actions'
import { fetchWorkspaces, fetchWorkspace } from '../../actions/workspace_actions';
import TaskIndex from './task_index';


const mapStateToProps = (state, ownProps) => {
    const tasks = state.entities.tasks
    let currentUser = state.entities.users[state.session.id]
    let workspaceId = ownProps.match.params.workspaceId

    return {
        tasks,
        currentUser,
        workspace: state.entities.workspaces[workspaceId]
    }
}

const mapDispatchToProps = dispatch => {
    return  {
        fetchWorkspaces: () => dispatch(fetchWorkspaces()),
        fetchTasks: (workspace_id) => dispatch(fetchTasks(workspace_id)),
        fetchTask: (id) => dispatch(fetchTask(id)),
        deleteTask: (id) => dispatch(deleteTask(id)),
        createTask: (task) => dispatch(createTask(task)),
        updateTask: (task) => dispatch(updateTask(task)),
        fetchWorkspace: (id) => dispatch(fetchWorkspace(id)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskIndex)