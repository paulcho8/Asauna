import React from 'react';
import { Route, Switch, Link, withRouter } from 'react-router-dom';
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form.container';
import { AuthRoute, PrivateRoute } from '../util/route_util';
import Splash from './landing_page/landing_page';
import WorkspaceContainer from './workspace/workspace_container';
import LoadingPageContainer from './loading_page/loading_page.container';
import Modal from '../components/modal/modal';
import { connect } from 'react-redux';
import CreateWorkspacePageContainer from './create_workspace_page/create_workspace_page_container';
import ProjectShowContainer from './project_show/project_show_container';

const App = ({ isModalOpen }) => (
    <div className="asauna-ui">
        { isModalOpen && <Modal /> }
        <Switch>
            <AuthRoute path="/login" component={LogInFormContainer} />
            <AuthRoute path="/signup" component={SignUpFormContainer} />
            <Route path="/home/loading" component={LoadingPageContainer}/>
            <Route path="/home/create" component={CreateWorkspacePageContainer}/>
            <Route path="/home/:workspaceId/:projectId" component={ProjectShowContainer} />
            <Route path="/home/:workspaceId" component={WorkspaceContainer} />
            <AuthRoute path="/" component={Splash} />
        </Switch>
    </div>
);

const mapStateToProps = ({ UI }) => ({
    isModalOpen: UI.modal.isOpen,
})

export default connect(mapStateToProps)(withRouter(App));