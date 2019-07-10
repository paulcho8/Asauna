import React from 'react';
import { withRouter } from 'react-router-dom';

class ProjectLoading extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        let that = this;
        this.props.fetchProjects(this.props.match.params.workspaceId)
            .then(() => {
                that.props.history.push(`/home/${that.props.match.params.workspaceId}`)
            })
    }


    render() {
        return (
            <div>Loading</div>
        );
    }
}

export default withRouter(ProjectLoading);
