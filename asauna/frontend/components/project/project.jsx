import React from 'react';
import { withRouter, Link } from 'react-router-dom';

class Project extends React.Component {
    constructor(props) {
        super(props)
    }



    render() {
        return (
            <div className="project--grid">
                <div className="project--grid--container">
                    <div className="project--grid--tile">
                        <div className="project--grid--structure">
                            <div className="project--grid--tile--card">
                                <i className="far fa-list-alt"></i>
                            </div>
                        </div>
                        <Link className="project--grid--name" to={{pathname: `/home/${this.props.match.params.workspaceId}/${this.props.project.id}`}}>
                            {this.props.project.name}
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}


export default withRouter(Project)