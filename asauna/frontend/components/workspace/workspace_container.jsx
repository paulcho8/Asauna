import { connect } from 'react-redux';
import { fetchWorkspace, updateWorkspace, createWorkspace } from '../../actions/workspace_actions';
import Workspace from './workspace'

const mapStateToProps = (state, ownProps) => {
    let workspaceId = ownProps.match.params.workspaceId
    return {
        workspace: state.entities.workspaces[workspaceId] || {}
    }
};

const mapDispatchToProps = dispatch => ({
    fetchWorkspace: (id) => dispatch(fetchWorkspace(id)),
    createWorkspace: (workspace) => dispatch(createWorkspace(workspace)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Workspace);
