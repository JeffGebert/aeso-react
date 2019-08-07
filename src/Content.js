import React, {Component} from 'react'
import './Content.css'
import './Dashboard.css'
import './Supply.css'
import './Supply.js'
import Dashboard from './Dashboard.js'
import axios from 'axios'

class Content extends Component {
	// Data
	state={
		stwf:[]
	}


	// Functions
	componentWillMount() {
		axios.get(`http://localhost:4000/api/STWF`).then((res) => {
			this.setState({
				stwf: res.data
			})
		}).catch((err) => {
			console.log('err', err)
		})
	}



	// Render
	render() {
		return (
			<div id="content">
				{
					this.state.stwf.map((m) =>{
						return<Dashboard stwf={m}/>
					})
				}
			</div>
		)
	}
}

export default Content
