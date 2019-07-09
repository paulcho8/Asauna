import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
// import * as thunkActions from './actions/workspace_actions';
import * as ajaxAction from './util/project_api_util';


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


    window.fetchProjects = ajaxAction.fetchProjects
    window.fetchProject = ajaxAction.fetchProject
    window.createProject = ajaxAction.createProject
    window.updateProject = ajaxAction.updateProject
    window.deleteProject = ajaxAction.deleteProject

    window.getState = store.getState
    window.dispatch = store.dispatch

    ReactDOM.render(<Root store={store}/>, root);
});