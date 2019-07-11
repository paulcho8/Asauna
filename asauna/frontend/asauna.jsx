import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
// import * as thunkActions from './actions/workspace_actions';
import * as thunkAction from './actions/task_actions';


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


    window.fetchTasks = thunkAction.fetchTasks
    window.fetchTask = thunkAction.fetchTask
    window.createTask = thunkAction.createTask
    window.updateTask = thunkAction.updateTask
    window.deleteTask = thunkAction.deleteTask

    window.getState = store.getState
    window.dispatch = store.dispatch

    ReactDOM.render(<Root store={store}/>, root);
});