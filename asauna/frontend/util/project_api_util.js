export const fetchProjects = (workspace_id) => (
    $.ajax({
        method: 'GET',
        url: `api/workspaces/${workspace_id}/projects`
    })
);

export const fetchProject  = id => (
    $.ajax({
        method: 'GET',
        url: `api/projects/${id}`
    })
);

export const createProject  = project => (
    $.ajax({
        method: 'POST',
        url: `api/workspaces/${project.workspace_id}/projects`,
        data: { project }
    })
);

export const updateProject  = project => (
    $.ajax({
        method: 'PATCH',
        url: `api/projects/${project.id}`,
        data: { project }
    })
);

export const deleteProject  = id => (
    $.ajax({
        method: 'DELETE',
        url: `api/projects/${id}`
    })
);
