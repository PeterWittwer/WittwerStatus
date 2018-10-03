import React from "react";
import { Pie } from 'react-chartjs-2'; 
  
class PieChart extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			chartData: {
				
				labels: ['Florida', 'Chicago', 'China', 'Germany'],
				datasets: [{
					label: 'Total Clients',
					data: [
						200,
						100,
						50,
						60,
						
					],
					backgroundColor: [
						'#F3097F',
						'#F783BE',
						'#AB065A',
						'#72043C',
					]

				}]
			}
		}
    }
    


 	
render() {

    return ( 
            <div>
            
            <Pie
			data={this.state.chartData}
			width={300}
			height={150}
			options={{ 
				title: {
					display: true,
					text: 'Total Clients by Location',
                    fontSize: 20,

                },
				legend: {
					display: true,
					position: 'bottom',
					labels: {
						fontColor: '#282828'
					}
				}
			}} 
			 />


            </div>
    );
}
}


export default PieChart;
