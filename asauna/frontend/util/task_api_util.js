export const fetchTasks = (workspace_id) => (
    $.ajax({
        method: 'GET',
        url: `api/workspaces/${workspace_id}/tasks`
    })
);

export const fetchTask = id => (
    $.ajax({
        method: 'GET',
        url: `api/tasks/${id}`
    })
);

export const createTask = task => (
    $.ajax({
        method: 'POST',
        url: `api/workspaces/${task.workspace_id}/tasks`,
        data: { task }
    })
);

export const updateTask = task => (
    $.ajax({
        method: 'PATCH',
        url: `api/tasks/${task.id}`,
        data: { task }
    })
);

export const deleteTask = id => (
    $.ajax({
        method: 'DELETE',
        url: `api/tasks/${id}`
    })
);
