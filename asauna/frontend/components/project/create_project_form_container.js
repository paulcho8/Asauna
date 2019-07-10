import { connect } from 'react-redux';
import { createProject } from '../../actions/project_actions';
import ProjectForm from './create_project_form';
import { closeModal } from '../../actions/modal_actions';

const mapStateToProps = (state, ownProps) => {
    return {
        project: { name: "", workspace_id: ""},
    };
};

const mapDispatchToProps = dispatch => ({
    createProject: (workspace) => dispatch(createProject(workspace)),
    closeModal: () => dispatch(closeModal())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProjectForm);
