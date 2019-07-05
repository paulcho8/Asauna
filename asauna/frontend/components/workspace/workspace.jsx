import React from 'react';
import { Link } from 'react-router-dom';


const Workspace = props => (
    <div>
        <Link to={`/home/${props.workspace.id}`}>{props.workspace.name}</Link>
    </div>
)

export default Workspace