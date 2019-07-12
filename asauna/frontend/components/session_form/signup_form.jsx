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

	componentWillUnmount(){
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
		this.props.signup(user);
	}

	renderErrors() {
		return (
			<ul className="errors--container">
				{this.props.errors.map((error, i) => (
					<li className="errors--content" key={`error-${i}`}>
						{error}
					</li>
				))}
			</ul>
		);
	}

	render() {
		return (
			<div className="dialog">
				<div className="dialog--header">
					<i className="fas fa-fire"></i> 
					<Link to="/" className="session-link"><div className="session--logo">asauna</div></Link>
				</div>
				<div className="dialog--container">
					<div className="dialog--content">
						<form className="dialog--form" onSubmit={this.handleSubmit}>
							<h1 className="title">Sign Up</h1>
							<div className="alert--error">
								{this.renderErrors()}
							</div>
							<div className="form-input">
								<label>Name</label>
									<input className="input" type="name"
										value={this.state.name}
										onChange={this.update('name')}
									/>
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
								<button className="buttonView buttonView--default buttonView--primary buttonView--large button-submit">
									<span>Sign Up</span>
								</button>
							</div>
						</form>
					</div>
				<div className="dialog--footer">
					<span>Already have an account? </span>
					<button>
						<Link className="buttonView buttonView--default buttonView--background" to={`/login`}>Login</Link>
					</button>
				</div>
				</div>
			</div>
		);
	}
}


export default SignupForm;
