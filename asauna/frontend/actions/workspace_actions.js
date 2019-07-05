export const RECEIVE_WORKSPACES = 'RECEIVE_WORKSPACES'
export const RECEIVE_WORKSPACE = 'RECEIVE_WORKSPACE'
import * as WorkspaceApiUtil from '../util/workspace_api_util'


const receiveWorkspaces = workspaces => ({
    type: RECEIVE_WORKSPACES,
    workspaces
})

const receiveWorkspace = workspace => ({
    type: RECEIVE_WORKSPACE,
    workspace
})


export const fetchWorkspaces = () => dispatch => (
    WorkspaceApiUtil.fetchWorkspaces().then(workspaces => dispatch(receiveWorkspaces(workspaces)))
)

export const fetchWorkspace = (id) => dispatch => (
    WorkspaceApiUtil.fetchWorkspace(id).then(workspace => dispatch(receiveWorkspace(workspace)))
)

export const createWorkspace = (workspace) => dispatch => (
    WorkspaceApiUtil.createWorkspace(workspace).then(workspace => dispatch(receiveWorkspace(workspace)))
)

export const updateWorkspace = (workspace) => dispatch => (
    WorkspaceApiUtil.updateWorkspace(workspace).then(workspace => dispatch(receiveWorkspace(workspace)))
)