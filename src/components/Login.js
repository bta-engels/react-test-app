import React, {Component} from 'react';
import Axios from "axios"
import { Form, FormGroup, FormLabel, FormControl, Button } from "react-bootstrap";

class Login extends Component {
	apiURL = 'http://127.0.0.01:8000/api/login';

	frm = {
		email: null,
		password: null,
	}

	onChange = (e) => {
		let val = e.target.value
		switch (e.target.name) {
			case 'email':
				this.frm.email = val
				break;
			case 'password':
				this.frm.password = val
				break;
			default:
				break;
		}
	}

	login = async (e) => {
		e.preventDefault()
		const response = await Axios.post(this.apiURL, this.frm)
		if(response.data) {
			localStorage.setItem('auth', JSON.stringify(response.data))
			this.props.auth(response.data)
		}
	}

	render() {
		return (
			<div>
				<Form>
					<FormGroup>
						<FormLabel>Email</FormLabel>
						<FormControl name="email" type="email" onChange={this.onChange} />
					</FormGroup>
					<FormGroup>
						<FormLabel>Passwort</FormLabel>
						<FormControl name="password" type="password" onChange={this.onChange} />
					</FormGroup>
					<FormGroup className="mt-3">
						<Button onClick={this.login}>Login</Button>
					</FormGroup>
				</Form>
			</div>
		);
	}
}

export default Login
