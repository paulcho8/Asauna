import { connect } from 'react-redux';
import { fetchWorkspaces } from '../../actions/workspace_actions';
import Sidebar from './sidebar'

const mapStateToProps = (state, ownProps) => {
    // debugger
    // let workspaceId = ownProps.match.params.workspaceId
    return {
        // workspaceId,
        workspace: ownProps.workspace
        // workspaces
    };
};

const mapDispatchToProps = dispatch => ({
    fetchWorkspaces: () => dispatch(fetchWorkspaces()),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Sidebar);
