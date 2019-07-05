import React from 'react';
import { Link } from 'react-router-dom';


const Workspace = props => (
    <li>
        <Link className="menuItem--content" to={`/home/${props.workspace.id}`}>{props.workspace.name}</Link>
    </li>
)

export default Workspace