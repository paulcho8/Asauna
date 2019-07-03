import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';


class SignupForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			username: '',
			password: ''
		};
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	update(field) {
		return e => this.setState({
			[field]: e.currentTarget.value
		});
	}

	handleSubmit(e) {
		e.preventDefault();
		const user = Object.assign({}, this.state);
		this.props.signup(user);
	}

	renderErrors() {
		return (
			<ul>
				{this.props.errors.map((error, i) => (
					<li key={`error-${i}`}>
						{error}
					</li>
				))}
			</ul>
		);
	}

	render() {
		return (
			<div className="login-form-container">
				<form onSubmit={this.handleSubmit} className="login-form-box">
					Sign Up
          <br />
					{this.renderErrors()}
					<div className="login-form">
						<br />
						<label>Name:
              <input type="text"
								value={this.state.name}
								onChange={this.update('name')}
								className="login-input"
							/>
						</label>
						<br />
						<label>Email:
              <input type="text"
								value={this.state.email}
								onChange={this.update('email')}
								className="login-input"
							/>
						</label>
						<br />
						<label>Password:
              <input type="password"
								value={this.state.password}
								onChange={this.update('password')}
								className="login-input"
							/>
						</label>
						<br />
						<input className="session-submit" type="submit" value="Sign Up" />
						<br />
					</div>
				</form>
				<Link to={`/login`}>Login</Link>
			</div>
		);
	}
}


export default withRouter(SignupForm);
