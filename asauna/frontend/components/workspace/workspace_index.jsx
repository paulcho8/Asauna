import React from 'react';
import { Link, withRouter} from 'react-router-dom';


class WorkspaceIndex extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {

        return (
        <div>
            <li>
                <Link className="menuItem--content" to={`/home/${this.props.workspace.id}`}>
                    <div className="filler"></div>
                    {(this.props.match.params.workspaceId == this.props.workspace.id)
                        ? <div className="fas fa-check"></div>
                        : <div className="filler"></div>
                    } 
                    &nbsp;
                    &nbsp;
                    {this.props.workspace.name}
                </Link>
            </li>
        </div>
        )
    }
}

export default withRouter(WorkspaceIndex)