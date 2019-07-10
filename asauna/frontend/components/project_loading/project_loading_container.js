import { connect } from 'react-redux';
import { fetchProjects } from '../../actions/project_actions';
import ProjectLoading from './project_loading';

const mapStateToProps = (state, ownProps) => {
    return {
        projects: Object.values(state.entities.projects)
    }
};

const mapDispatchToProps = dispatch => ({
    fetchProjects: (workspaceId) => dispatch(fetchProjects(workspaceId)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProjectLoading);
