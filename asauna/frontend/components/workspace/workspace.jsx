import React from 'react';
import Navbar from '../navbar/navbar_container';
import Sidebar from '../sidebar/sidebar_container';
import Project from '../project/project';
import { withRouter } from 'react-router-dom';

class Workspace extends React.Component {
    constructor(props){
        super(props)
    }

    componentDidMount() {
        this.props.fetchProjects(this.props.match.params.workspaceId)
    }

    

    render() {
        if (this.props.projects === undefined) return null;

        let project = this.props.projects.map(project => {
            return (
                <Project 
                project={project}
                key={project.id}
                />
            )
        })

        return (
            <div className="workspace--container">
                <Sidebar 
                    workspace={this.props.workspace}
                    currentUser={this.props.currentUser}
                />
                <div className="asauna--main">
                    <Navbar />
                    <div className="project--container">
                    <header className="project--header">Recent Projects</header>
                        <div className="project--container--grid">
                            <div className="project--container--content">
                                {project}
                                <div className="project--grid">
                                    <div className="project--grid--container">
                                        <div className="project--grid--tile" onClick={() => this.props.openModal('Create Project')} >
                                            <div className="project--grid--structure">
                                                <div className="project--grid--tile--empty--card">
                                                    <i className="fas fa-plus"></i>
                                                </div>
                                            </div>
                                            <div className="project--grid--name" >
                                                New Project
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(Workspace);
