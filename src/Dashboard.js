import React, {Component} from 'react'
import axios from 'axios'
import Sidebar from './Sidebar.js'
import './Dashboard.css'
import './Layout.css'

class Dashboard extends Component {
	// Data
	state = {
		forecastvsactual: [],
		atc:[]

	}
	// Lifecycle


	// Functions
	componentWillMount() {
		axios.get(`http://localhost:4000/api/forecast_vs_actual`).then((res) => {
			this.setState({
				forecastvsactual: res.data
			})
		}).catch((err) => {
			console.log('err', err)
		})

		axios.get(`http://localhost:4000/api/get_atc`).then((res) => {
			this.setState({
				atc: res.data
			})
		}).catch((err) => {
			console.log('err', err)
		})
}


	// Render
	render() {
		return (
			<div id="wrap">
				<Sidebar/>
				<div className="table_wrapper">
					<div id="table1">
						<table>
							<thead>
								<tr>
									<th>Date (HE)</th>
									<th>Forecast</th>
									<th>RT Price</th>
									<th>AIL DAM LOAD</th>
									<th>Actual Load</th>
									</tr>
									</thead>
									<tbody>

									{
										this.state.forecastvsactual.map(j=>{
											return(
												<tr>
													<td>{j.date}</td>
													<td>{j.real_time_forecast}</td>
													<td>{j.actual_price}</td>
													<td>{j.day_ahead_load_forecast}</td>
													<td>{j.actual_ail}</td>
												</tr>

												)
											})
									}

							</tbody>
							</table>
					</div>
					<div id = "table2">
					<table>
						<thead>
							<tr>
								<th>Offers</th>
								<th>ATC</th>
								<th>Offers</th>
								<th>ATC</th>
								</tr>
								</thead>
								<tbody>

									{
										this.state.atc.map(j=>{
											return(
												<tr>
													<td>{j.Offers_System_Import}</td>
													<td>{j.ATC_SYSTEM_IMPORT}</td>
													<td>{j.Offers_System_Export}</td>
													<td>{j.ATC_SYSTEM_EXPORT}</td>
												</tr>
												)
												})
										}
									</tbody>
						</table>

					</div>


				</div>

			</div>
		)

	}
}


export default Dashboard
