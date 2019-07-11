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
                    <Link className="project--grid--tile" to={{ pathname: `/home/${this.props.match.params.workspaceId}/${this.props.project.id}` }}>
                        <div className="project--grid--structure">
                            <div className="project--grid--tile--card">
                                <i className="far fa-list-alt"></i>
                            </div>
                        </div>
                        <div className="project--grid--name" >
                            {this.props.project.name}
                        </div>
                    </Link>
                </div>
            </div>
        )
    }
}


export default withRouter(Project)