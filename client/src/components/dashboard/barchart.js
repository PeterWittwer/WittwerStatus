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
						200,
						100,
						60,
						160,
					
					],
					backgroundColor: [
						// '#41CDD3',
						// '#20E1EA',
						// '#0FA0A3',
						// '#41A1B5',
						// '#306571',
						// '#98C1C3'
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
					fontSize: 20
				},
				legend: {
					display: true,
					position: 'right',
					labels: {
						fontColor: '#282828'
					}
				},

				scales: {
					yAxes: [{
						ticks: {
							fontColor: "#282828",
							fontSize: 14,
							beginAtZero: true

						}
					}],
					xAxes: [{
						ticks: {
							fontColor: "#282828",
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
