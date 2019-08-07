import React, {Component} from 'react'
import axios from 'axios'
import Sidebar from './Sidebar'
import './Layout.css'

class Supply extends Component {
	// Data
	state = {
		units: [],
		summary: [],
		generation:[],
		interchange:[]

	}

	// Lifecycle


	// Functions

	componentWillMount() {
		axios.get(`http://localhost:4000/api/units`).then((res) => {
			this.setState({
				units: res.data
			})
		}).catch((err) => {
			console.log('err', err)
		})
		axios.get(`http://localhost:4000/api/summary`).then((res) => {
			this.setState({
				summary: res.data
			})
		}).catch((err) => {
			console.log('err', err)
		})

		axios.get(`http://localhost:4000/api/generation`).then((res) => {
			this.setState({
				generation: res.data
			})
		}).catch((err) => {
			console.log('err', err)
		})

		axios.get(`http://localhost:4000/api/interchange`).then((res) => {
			this.setState({
				interchange: res.data
			})
		}).catch((err) => {
			console.log('err', err)
		})
	}



	// Render
	render() {
		return(
		<div id="wrap">
			<Sidebar/>
			<div>


					<div>
						<h2>Summary</h2>
						<table>
						<tbody>
			{this.state.summary.map(t=>{
				return (
						<tr>
						<td>{t.Summary}</td>
						<td>{t.Values}</td>
						</tr>
					)
				})
			}

						</tbody>
						</table>
					</div>


						<div>
							<h2>Generation</h2>
							<table>
								<thead>
									<tr>
										<th>Group</th>
										<th>MC</th>
										<th>TNG</th>
										<th>DCR</th>
									</tr>
									</thead>
								<tbody>
								{
									this.state.generation.map(j=>{
										return(
											<tr>
												<td>{j.GROUP}</td>
												<td>{j.MC}</td>
												<td>{j.TNG}</td>
												<td>{j.DCR}</td>
											</tr>

										)
									})
									}
									</tbody>
									</table>
								</div>


								<div>
									<h2>Interchange</h2>
									<table>
										<thead>
											<tr>
												<th>Path</th>
												<th>Actual Flow</th>
											</tr>
											</thead>
										<tbody>
										{
											this.state.interchange.map(d=>{
												return(
													<tr>
														<td>{d.PATH}</td>
														<td>{d.ACTUAL_FLOW}</td>
													</tr>

												)
											})
											}
											</tbody>
											</table>
										</div>


			{
				this.state.units.map(u=>{
					return (

						<div>
							<h2>{u.generation_type}</h2>
							<table>
								<thead>
									<tr>
										<th>ASSET</th>
										<th>MC</th>
										<th>TNG</th>
										<th>DCR</th>
									</tr>
								</thead>
								<tbody>
								{
									u.data.map(j=>{
										return(
											<tr>
												<td>{j.ASSET}</td>
												<td>{j.MC}</td>
												<td>{j.TNG}</td>
												<td>{j.DCR}</td>
											</tr>

										)
									})
								}

								</tbody>
							</table>
						</div>

					)
				})
			}
			</div>
		</div>
	)
	}
}

export default Supply
