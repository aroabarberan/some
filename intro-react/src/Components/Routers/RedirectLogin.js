import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

export function Login() {
	return (
		<div>
      <h3>You are in LOGIIIINNN!!!!</h3>
    </div>
	)
}

export function Logout() {

}

export function Base() {
	return (
		<Router>
			<div>
				<div>
					<Head />
				</div>
			</div>
		</Router>
	)
}

export function Head() {
	return (
		<Router>
			<div>
				<h2>ROUTERS!!!</h2>
				<Link to='login'><Button /></Link>
				<Route exact path="/login" component={Login} />
			</div>
		</Router>
	)
}

export function Button() {
	return (
		<div>
			<button>Login</button>
		</div>
	)
}