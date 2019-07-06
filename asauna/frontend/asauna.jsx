import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import * as thunkActions from './actions/workspace_actions';


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

    window.fetchWorkspace = thunkActions.fetchWorkspace;
    window.createWorkspace = thunkActions.createWorkspace;
    window.updateWorkspace = thunkActions.updateWorkspace;
    window.fetchWorkspaces = thunkActions.fetchWorkspaces;
    window.getState = store.getState
    window.dispatch = store.dispatch

    ReactDOM.render(<Root store={store}/>, root);
});