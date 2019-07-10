import { connect } from 'react-redux';
import { fetchProjects, createProject, deleteProject, updateProject } from '../../actions/project_actions';
import { openModal } from '../../actions/modal_actions';
import Project from './project';


const mapStateToProps = (state) => {
    // debugger
    return {
        projects: Object.values(state.entities.projects)
    };
};

const mapDispatchToProps = dispatch => ({
    // deleteProject: (id) => dispatch(deleteProject(id)),
    createProject: (project) => dispatch(createProject(project)),
    // updateProject: (project) => dispatch(updateProject(project)),
    openModal: (modal) => dispatch(openModal(modal))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Project);
