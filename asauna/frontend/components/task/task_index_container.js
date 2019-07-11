import { connect } from 'react-redux';
import { fetchTasks, fetchTask, deleteTask, createTask, updateTask } from '../../actions/task_actions'
import { fetchWorkspaces } from '../../actions/workspace_actions';
import TaskIndex from './task_index';


const mapStateToProps = (state, ownProps) => {
    const tasks = state.entities.tasks
    let currentUser = state.entities.users[state.session.id]
    let workspaceId = ownProps.match.params.workspaceId
    let workspace = state.entities.workspaces[workspaceId]

    return {
        tasks,
        currentUser,
        workspace,
    }
}

const mapDispatchToProps = dispatch => {
    return  {
        fetchTasks: (workspace_id) => dispatch(fetchTasks(workspace_id)),
        fetchTask: (id) => dispatch(fetchTask(id)),
        deleteTask: (id) => dispatch(deleteTask(id)),
        fetchWorkspaces: () => dispatch(fetchWorkspaces()),
        createTask: (task) => dispatch(createTask(task)),
        updateTask: (task) => dispatch(updateTask(task))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskIndex)