import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import workspacesReducer from './workspaces_reducer';
import projectsReducer from './projects_reducer';
import tasksReducer from './tasks_reducer';

const entitiesReducer = combineReducers({
    users: usersReducer,
    workspaces: workspacesReducer,
    projects: projectsReducer,
    tasks: tasksReducer,
});

export default entitiesReducer;