import React from 'react';
import Sidebar from '../sidebar/sidebar_container'
import Navbar from '../navbar/navbar_container';
import { withRouter } from 'react-router-dom';
import TaskIndexItem from '../task/task_index_item';

class ProjectShow extends React.Component {
    constructor(props) {
        super(props)

        this.handleRemove = this.handleRemove.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }


    componentDidMount(){
        this.props.fetchProject(this.props.match.params.projectId)
        this.props.fetchWorkspaces();
        this.props.fetchTasks(this.props.match.params.workspaceId)
    }

    handleSubmit() {
        // debugger
        this.props.createTask({ name: "", workspace_id: this.props.match.params.workspaceId, project_id: this.props.match.params.projectId })
    }

    handleTaskRemove() {
        this.props.deleteTask(this.props.task.id)
            .then(() => {
                this.props.fetchTasks(this.props.match.params.workspaceId)
            })
    }

    handleRemove(){
        const projectId = this.props.match.params.projectId
        this.props.deleteProject(projectId)
        .then(() => this.props.history.push(`/home/${this.props.workspace.id}`))
    }

    render() {
        const projectName = this.props.project ? this.props.project.name : ""
        const workspace = this.props.workspace ? this.props.workspace : null

            // Object.values(this.props.tasks).filter(task => task.project_id === this.props.match.params.projectId).map(task =>
            //     <TaskIndexItem
            //         task={task}
            //         key={task.id}
            //         deleteTask={this.props.deleteTask}
            //         updateTask={this.props.updateTask}
            //         fetchTasks={this.props.fetchTasks}
            //     />
            // )
        // debugger
        return (
            <div>
                <div className="tasks--container">
                    <Sidebar
                        currentUser={this.props.currentUser}
                        workspace={workspace}
                    />
                    <div className="tasks--main--container">
                        <div className="Topbar--header">
                            <span className="header--name">{projectName}</span>
                            <button onClick={this.handleRemove} className="buttonView buttonView--default buttonView--primary buttonView--large button-submit">Delete Project</button>
                        </div>
                        <div className="tasks--main">
                            <div className="tasks--index--container">
                                <div className="tasks--index--header">
                                    <button className="buttonView buttonView--default buttonView--primary buttonView--large button-submit" onClick={this.handleSubmit}>
                                        Add Task
                                </button>
                                </div>
                                <div className="tasks--index--content">
                                    <div>
                                        {Object.values(this.props.tasks).filter(task => task.project_id == this.props.match.params.projectId).map(task =>
                                            <TaskIndexItem
                                                task={task}
                                                key={task.id}
                                                deleteTask={this.props.deleteTask}
                                                updateTask={this.props.updateTask}
                                                fetchTasks={this.props.fetchTasks}
                                            />
                                        )}
                                    </div>
                                </div>
                                <div className="tasks--index--footer">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}



export default withRouter(ProjectShow)