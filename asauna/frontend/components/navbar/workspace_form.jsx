import React from 'react';
import { Link, withRouter  } from 'react-router-dom';


class WorkspaceForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.workspace
        
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // componentWillUnmount() {
    //     this.props.removeErrors();
    // }

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
            // debugger    
            that.props.history.push(`/home/loading`)}
        )
        // debugger
        this.props.closeModal()
    };

    // renderErrors() {
    //     return (
    //         <ul className="errors--container">
    //             {this.props.errors.map((error, i) => (
    //                 <li className="errors--content" key={`error-${i}`}>
    //                     {error}
    //                 </li>
    //             ))}
    //         </ul>
    //     );
    // }

    render() {
        return (
            <div className="modal--container">
                <div className="modal--child">
                    <div className="modal--formContainer">
                        <div className="modal--formTitle">{this.props.formType}</div>
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
