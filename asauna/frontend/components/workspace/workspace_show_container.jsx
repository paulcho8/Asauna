import { connect } from 'react-redux';
import { fetchWorkspace, updateWorkspace, createWorkspace } from '../../actions/workspace_actions';
import WorkspaceShow from './workspace_show'

const mapStateToProps = (state, ownProps) => {
    // debugger;
    let workspaceId = ownProps.match.params.workspaceId
    return {
        workspace: state.entities.workspaces[workspaceId] || {}
    }
    // return {
    //     workspace: workspaces[workspaceId]
    // };
};

const mapDispatchToProps = dispatch => ({
    fetchWorkspace: (id) => dispatch(fetchWorkspace(id)),
    createWorkspace: (workspace) => dispatch(createWorkspace(workspace)),
    // updateWorkspace: (workspace) => dispatch(updateWorkspace(workspace)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(WorkspaceShow);
