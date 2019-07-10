import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
// import * as thunkActions from './actions/workspace_actions';
import * as thunkAction from './actions/project_actions';


document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    let store;
    if (window.currentUser) {
        const preloadedState = {
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            },
            session: { id: window.currentUser.id }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }


    window.fetchProjects = thunkAction.fetchProjects
    window.fetchProject = thunkAction.fetchProject
    window.createProject = thunkAction.createProject
    window.updateProject = thunkAction.updateProject
    window.deleteProject = thunkAction.deleteProject

    window.getState = store.getState
    window.dispatch = store.dispatch

    ReactDOM.render(<Root store={store}/>, root);
});