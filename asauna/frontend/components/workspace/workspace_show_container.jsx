import { connect } from 'react-redux';
import { fetchWorkspace, updateWorkspace, createWorkspace } from '../../actions/workspace_actions';
import WorkspaceShow from './workspace_show'

const mapStateToProps = ({ entities: { workspaces } }, ownProps) => {
    let workspaceId = ownProps.match.params.workspaceId
    return {
        workspaces: workspaces[workspaceId]
    };
};

const mapDispatchToProps = dispatch => ({
    fetchWorkspace: (id) => dispatch(fetchWorkspace(id)),
    createWorkspace: (workspace) => dispatch(createWorkspace(workspace)),
    updateWorkspace: (workspace) => dispatch(updateWorkspace(workspace)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(WorkspaceShow);
