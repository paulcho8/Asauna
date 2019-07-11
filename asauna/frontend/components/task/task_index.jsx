import React from 'react'
import { withRouter } from 'react-router-dom'; 
import Navbar from '../navbar/navbar_container';
import Sidebar from '../sidebar/sidebar_container'

class TaskIndex extends React.Component {
    constructor(props) {
        super(props) 

        this.state = {
            name: "",
            workspace_id: `${this.props.match.params.workspaceId}`
        }

        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount() {
        this.props.fetchWorkspaces()
        this.props.fetchTasks(this.props.match.params.workspaceId)
    }

    handleSubmit() {
        this.props.createTask(this.state)
    }

    update(value) {
        let that = this;
        that.setState({
           name: value
        }), () => {
           that.props.updateTask(that.state)
       }
    }

    // componentDidUpdate() {
    //     this.props.fetchTasks(this.props.match.params.workspaceId)        
    // }

    render() {
        const workspace = this.props.workspace ? this.props.workspace : null
        const taskNames = Object.values(this.props.tasks).map(task => 
        <div className="tasks--index--row">
            <div className="tasks--index--row--main">
                <form className='task--form'>
                    <div className="check--button">
                        X
                    </div>
                    <input type="text" className="task--input" value={task.name} onChange={(e) => this.update(e.target.value)}/>
                </form>
            </div>
            <div className="tasks--index--row--dueDate">
                {task.due_date}
            </div>
        </div>)

        return (
            <div className="tasks--container">
                <Sidebar
                    currentUser={this.props.currentUser}
                    workspace={workspace} 
                />
                <div className="tasks--main--container">
                    <Navbar />
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
                                <div>
                                    {taskNames}
                                </div>
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