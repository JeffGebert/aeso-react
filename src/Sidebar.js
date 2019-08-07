import React, {Component} from 'react'
import './Sidebar.css'
import axios from 'axios'
import { Link } from 'react-router-dom';


class Sidebar extends Component {
	// Data

	// Lifecycle


	// Functions

	// Render
	render() {
		return (
			<div id="sidebar">
				<h3>Welcome</h3>
				<li><Link to="/Dashboard">Dashboard</Link></li>
				<li><Link to="/Supply">Current Supply and Demand</Link></li>
			</div>
		)
	}
}

export default Sidebar
