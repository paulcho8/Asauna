import React from 'react';
import Sidebar from '../sidebar/sidebar_container'
import Navbar from '../navbar/navbar_container';
import { withRouter } from 'react-router-dom';

class ProjectShow extends React.Component {
    constructor(props) {
        super(props)


        this.handleRemove = this.handleRemove.bind(this)
    }


    componentDidMount(){
        this.props.fetchProject(this.props.match.params.projectId)
        this.props.fetchWorkspaces();
    }

    handleRemove(){
        const projectId = this.props.match.params.projectId
        this.props.deleteProject(projectId)
        .then(() => this.props.history.push(`/home/${this.props.workspace.id}`))
    }

    render() {
        const projectName = this.props.project ? this.props.project.name : ""
        const workspace = this.props.workspace ? this.props.workspace : null
        // const taskNames = Object.values(this.props.tasks).map(task =>
        //     <div className="tasks--index--row">
        //         <div className="tasks--index--row--main">
        //             <form className='task--form'>
        //                 <div className="check--button">
        //                     X
        //             </div>
        //                 <input type="text" className="task--input" value="" onChange={(e) => this.update(e.target.value)} />
        //             </form>
        //         </div>
        //         <div className="tasks--index--row--dueDate">
        //             {task.due_date}
        //         </div>
        //     </div>)
        return (
            <div>
                <div className="tasks--container">
                    <Sidebar
                        currentUser={this.props.currentUser}
                        workspace={workspace}
                    />
                    <div className="tasks--main--container">
                        <Navbar />
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
                                        {/* {taskNames} */}
                                    </div>
                                </div>
                                <div className="tasks--index--footer">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="project--show--container"
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
                                    {taskNames}
                                </div>
                            </div>
                            <div className="tasks--index--footer">
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
        )
    }
}



export default withRouter(ProjectShow)