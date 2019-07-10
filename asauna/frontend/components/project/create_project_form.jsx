import React from 'react';
import { Link, withRouter } from 'react-router-dom';


class ProjectForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.project

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        const urlParts = this.props.location.pathname.split("/")
        const workspaceId = urlParts[urlParts.length - 1]
        return e => this.setState({
            [field]: e.currentTarget.value,
            workspace_id: workspaceId
        });
    }

    handleSubmit(e) {
        let that = this;
        e.preventDefault();
        this.props.createProject(this.state)
            // .then(workspace => {  
            //     that.props.ownProps.history.push(`/home/${workspace.workspace.id}`)
            // })
        this.props.closeModal()
    };


    render() {

        // debugger
        return (
            <div className="modal--container">
                <div className="modal--child">
                    <div className="modal--formContainer">
                        <div className="modal--formTitle">Create a New Project</div>
                        <div className="modal--formSubContainer">
                            <form onSubmit={this.handleSubmit} className="modal--form">
                                <div className="modal--form--table">
                                    <div className="field">
                                        <label className="modal--form--label">Project Name</label>
                                        <input className="generic-input modal--form--field" type="text"  required placeholder="Project Name" onChange={this.update("name")}/>
                                        {/* <input type="hidden" value={workspaceId}/> */}
                                    </div>
                                    {/* <div>
                                        <div colSpan="2" className="spacer"></div>
                                    </div>
                                    <div className="field">
                                        <label className="modal--form--label">Description</label>
                                        <textarea className="generic-input modal--form--field" type="text" value={this.state.description} onChange={this.update("description")}></textarea>
                                    </div> */}
                                </div>
                                <div>
                                    <div colSpan="2" className="spacer"></div>
                                </div>
                                <div className="modal--button">
                                    <div>
                                        <input type="submit" value="Create Project" className="buttonView buttonView--default buttonView--primary buttonView--large button-submit" />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default withRouter(ProjectForm);
