import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			username: '',
			password: ''
		};
		this.handleClick = this.handleClick.bind(this);
	}

	componentWillUnmount() {
		this.props.clearErrors();
	}

	update(field) {
		return e => this.setState({
			[field]: e.currentTarget.value
		});
	}

	handleClick(e) {
		e.preventDefault();
		const user = Object.assign({}, this.state);
		this.props.login(user);
	}

	renderErrors() {
		return (
			<ul className="errors--container">
				{this.props.errors.map((error, i) => (
					<div className="errors--content" key={`error-${i}`}>
						{error}
					</div>
				))}
			</ul>
		);
	}

	render() {
		return (
			<div className="dialog">
				<div className="dialog--header">
					<i className="fas fa-fire"></i> asauna
				</div>
				<div className="dialog--container">
					<div className="dialog--content">
						<form className="dialog--form">
							<h1 className="title">Log In</h1>
							<div className="alert--error">
								{this.renderErrors()}
							</div>
							<div className="form-input">
								<label>Email Address</label>
									<input type="text"
										value={this.state.email}
										onChange={this.update('email')}
										/>
							</div>
							<div className="form-input">
								<label>Password</label>
									<input type="password"
										value={this.state.password}
										onChange={this.update('password')}
										/>
							</div>
							<div className="form-input form-input--button">
								<button onClick={this.handleClick} className="buttonView buttonView--default buttonView--primary buttonView--large button-submit">
									<span>Log In</span>
								</button>
							</div>
						</form>
					</div>
				<div className="dialog--footer">
					Don't have an account? <Link to={`/signup`}>Sign Up</Link>
				</div>
				</div>
			</div>
		);
	}
}

export default withRouter(SessionForm);
