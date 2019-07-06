import React from 'react';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			username: '',
			password: ''
		};
		this.handleSubmit = this.handleSubmit.bind(this);
		this.demoLogin = this.demoLogin.bind(this);
	}

	demoLogin(e) {
		e.preventDefault();

		const demoUser = {
			email: 'demo@asauna.com',
			password: 'demouser'
		};
		
		this.setState({ email: demoUser.email})
		this.setState({ password: demoUser.password})
		this.props.login(demoUser)
	}

	componentWillUnmount() {
		this.props.removeErrors();
	}

	update(field) {
		return e => this.setState({
			[field]: e.currentTarget.value
		});
	}

	handleSubmit(e) {
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
					<i className="fas fa-fire"></i>
					<div className="session--logo">asauna</div>
				</div>
				<div className="dialog--container">
					<div className="dialog--content">
						<form className="dialog--form" onSubmit={this.handleSubmit}>
							<h1 className="title">Log In</h1>
							<div className="alert--error">
								{this.renderErrors()}
							</div>
							<div className="form-input">
								<label>Email Address</label>
									<input className="input" type="email"
										value={this.state.email}
										onChange={this.update('email')}
										/>
							</div>
							<div className="form-input">
								<label>Password</label>
									<input className="input" type="password"
										value={this.state.password}
										onChange={this.update('password')}
										/>
							</div>
							<div className="form-input form-input--button">
								<button className="buttonView buttonView--default buttonView--primary buttonView--large button-submit" disabled={!this.state.email}>
									<span>Log In</span>
								</button>

								<button onClick={this.demoLogin} className="buttonView buttonView--default buttonView--primary buttonView--large button-submit" >
									<span>Demo Login</span>
								</button>

							</div>
						</form>
					</div>
				<div className="dialog--footer">
					<span>Don't have an account?</span> 
						<button>
							<Link className="buttonView buttonView--default buttonView--background" to={`/signup`}>Sign Up</Link>
						</button>
				</div>
				</div>
			</div>
		);
	}
}

export default SessionForm;
