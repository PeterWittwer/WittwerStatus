import React from "react";
import { Bar } from 'react-chartjs-2'; 
  
class BarChart extends React.Component {
 
	constructor(props) {
		super(props);
		this.state = {
			chartData: {
				labels: ['Chicago', 'Florida', 'China', 'Germany'],
				datasets: [{
					label: 'Currency',
					data: [
						290,
						170,
						210,
						260,
					],
					backgroundColor: [
						'#F3097F',
						'#F783BE',
						'#AB065A',
						'#72043C',
						'#CB34A9',
						'#A95997'
					]
				}]
			}
		}
    }

	
	// unbilledShipments, billedShipments


render() {




    return ( 
            <div>
            
            <Bar
			data={this.state.chartData}
			width={100}
			height={50}
			options={{ 
				title: {
					display: true,
					text: 'Unbiled Shipments in $',
					fontSize: 20,
					fontColor: '#00aeef'
				},
				legend: {
					display: true,
					position: 'right',
					labels: {
						fontColor: '#00aeef'
					}
				},

				scales: {
					yAxes: [{
						ticks: {
							fontColor: "#00aeef",
							fontSize: 14,
							beginAtZero: true

						}
					}],
					xAxes: [{
						ticks: {
							fontColor: "#00aeef",
							fontSize: 14,
							stepSize: 1,
							beginAtZero: true
						}
					}]
				}
			}} 
			 />


            </div>
    );
}
}


export default BarChart;
