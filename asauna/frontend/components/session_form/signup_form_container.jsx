import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { signup, removeErrors } from '../../actions/session_actions';
import SignupForm from './signup_form';


const mapStateToProps = ({ errors }) => {
    return {
        errors: errors.session,
        signup: <Link to="/signup">Sign Up</Link>,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        removeErrors: () => dispatch(removeErrors()),
        signup: (user) => dispatch(signup(user)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);
