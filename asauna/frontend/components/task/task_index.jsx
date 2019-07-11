import React from 'react'
import { withRouter } from 'react-router-dom'; 
import Navbar from '../navbar/navbar_container';
import Sidebar from '../sidebar/sidebar_container'
import TaskIndexItem from './task_index_item'

class TaskIndex extends React.Component {
    constructor(props) {
        super(props) 


        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount() {
        this.props.fetchWorkspaces()
        this.props.fetchTasks(this.props.match.params.workspaceId)
        this.props.fetchWorkspace(this.props.match.params.workspaceId)
    }

    handleSubmit() {
        this.props.createTask({name: "", workspace_id: this.props.match.params.workspaceId})
    }

    render() {
        const workspace = this.props.workspace ? this.props.workspace : null
        return (
            <div className="tasks--container">
                <Sidebar
                    currentUser={this.props.currentUser}
                    workspace={workspace} 
                />
                <div className="tasks--main--container">
                    {/* <Navbar workspace={workspace}/> */}
                    <div className="Topbar--header">
                        <span className="header--name">My Tasks</span>
                    </div>
                    <div className="tasks--main">
                        <div className="tasks--index--container">
                            <div className="tasks--index--header">
                                <button className="buttonView buttonView--default buttonView--primary buttonView--large button-submit" onClick={this.handleSubmit}>
                                    Add Task
                                </button>
                            </div>
                            <div className="tasks--index--content">
                                {Object.keys(this.props.tasks).map(id => 
                                    <TaskIndexItem 
                                        task={this.props.tasks[id]}
                                        key={id}
                                        deleteTask={this.props.deleteTask}
                                        updateTask={this.props.updateTask}
                                        fetchTasks={this.props.fetchTasks}
                                    />
                                )}
                            </div>                            
                            <div className="tasks--index--footer">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}



export default withRouter(TaskIndex)