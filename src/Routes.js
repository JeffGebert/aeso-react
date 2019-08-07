import React, {Component} from 'react'
import axios from 'axios'
import Dashboard from './Dashboard.js'
import Login from './Login.js'
import Signup from './Signup.js'
import Supply from './Supply.js'

import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'



class Routes extends Component {
	// Data

	// Lifecycle


	// Functions




	// Render
	render() {
			return (
				<BrowserRouter>
					<Switch>
						<Route path="/login" component={() => <Login auth={this.auth} />} />
						<Route path="/signup" component={() => <Signup auth={this.auth} />} />
						<Route path="/supply" component={() => <Supply auth={this.auth} />} />

						<Route path="/" component={() => <Dashboard auth={this.auth} />} />
					</Switch>
				</BrowserRouter>
			)
		}

}


export default Routes
