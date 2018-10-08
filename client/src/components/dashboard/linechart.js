import React from "react";
import { Line } from 'react-chartjs-2'; 
  
class LineChart extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			chartData: {
                type: 'line',
				labels: ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
				datasets: [{
					label: 'Profits',
					data: [
						200,
						220,
						250,
						260,
						300,
                        375,
                        300,
						300,
						350,
						360,
						300,
                        375
                        

					],
                    borderColor: "#00aeef",
                    backgroundColor: '#F3097F',
				}]
			}
		}
    }
    


 	
render() {

    return ( 
            <div>
            
            <Line
			data={this.state.chartData}
			width={100}
			height={50}
			options={{
				title: {
					display: true,
					text: 'Profits',
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
                            beginAtZero: true,


                        }
					}],
					xAxes: [{

						ticks: {
							fontColor: "#00aeef",
							fontSize: 14,
							stepSize: 1,
                            beginAtZero: true,

						 }
                    }],

				}
			}} 
			 />


            </div>
    );
}
}


export default LineChart;
