import React from 'react';
import { Link, withRouter  } from 'react-router-dom';


class WorkspaceForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.workspace
        
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        let that = this;
        e.preventDefault();
        this.props.action(this.state)
        .then(workspace => {  
            that.props.history.push(`/home/loading`)}
        )
        this.props.closeModal()
    };


    render() {
        // if (this.state === null) return null;
        debugger
        return (
            <div className="modal--container">
                <div className="modal--child">
                    <div className="modal--formContainer">
                        <div className="modal--formTitle">{this.props.formType}
                            <i className="fas fa-times" onClick={this.props.closeModal}></i>
                        </div>
                        <div className="modal--formSubContainer">
                            <form onSubmit={this.handleSubmit} className="modal--form">
                                <div className="modal--form--table">
                                    <div className="field">
                                        <label className="modal--form--label">Workspace Name</label>
                                        <input className="generic-input modal--form--field" type="text" value={this.state.name} onChange={this.update("name")} required placeholder="Company or Team Name" />
                                    </div>
                                    <div>
                                        <div colSpan="2" className="spacer"></div>
                                    </div>
                                    <div className="field">
                                        <label className="modal--form--label">Description</label>
                                        <textarea className="generic-input modal--form--field" type="text" value={this.state.description} onChange={this.update("description")}></textarea>
                                    </div>
                                </div>
                                <div>
                                    <div colSpan="2" className="spacer"></div>
                                </div>
                                <div className="modal--button">
                                    <div>
                                        <input type="submit" value={this.props.formType} className="buttonView buttonView--default buttonView--primary buttonView--large button-submit" />
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


export default withRouter(WorkspaceForm);
