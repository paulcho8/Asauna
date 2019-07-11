export const RECEIVE_TASKS = 'RECEIVE_TASKS'
export const RECEIVE_TASK = 'RECEIVE_TASK'
export const REMOVE_TASK = 'REMOVE_TASK'
import * as TaskApiUtil from '../util/task_api_util';


const receiveTasks = tasks => ({
    type: RECEIVE_TASKS,
    tasks
})

const receiveTask = task => ({
    type: RECEIVE_TASK,
    task
})

const removeTask = task => ({
    type: REMOVE_TASK,
})


export const fetchTasks = (workspace_id) => dispatch => (
    TaskApiUtil.fetchTasks(workspace_id).then(tasks => dispatch(receiveTasks(tasks)))
)

export const fetchTask = (id) => dispatch => (
    TaskApiUtil.fetchTask(id).then(task => dispatch(receiveTask(task)))
)

export const createTask = (task) => dispatch => (
    TaskApiUtil.createTask(task).then(task => dispatch(receiveTask(task)))
)

export const updateTask = (task) => dispatch => (
    TaskApiUtil.updateTask(task).then(task => dispatch(receiveTask(task)))
)

export const deleteTask = (id) => dispatch => (
    TaskApiUtil.deleteTask(id).then(task => dispatch(removeTask(task)))
)