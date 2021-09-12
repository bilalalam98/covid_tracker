import React from 'react';
import {Bar} from 'react-chartjs-2';








function BarChart(props){
    console.log(props.SetCountry)

    var fetch_data = props.SetCountry;
    
    const data = {

        labels: ['Today Cases', 'Today Deaths', 'Today Recovered'],
        datasets: [
          {
            label: 'Cocid Cases',
            backgroundColor: 'rgba(255,99,132,0.2)',
            borderColor: 'rgba(255,99,132,1)',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(255,99,132,0.4)',
            hoverBorderColor: 'rgba(25,250,80,1)',
            data: [fetch_data.todayCases,fetch_data.todayDeaths, fetch_data.todayRecovered]
          }
        ]
    };   
   
 
    return (
        <div>
        <div>  <h2>Barchart of covid cases</h2>
      <div >
       
        <Bar
          data={data}
          width={100}
          height={250}
          options={{
              maintainAspectRatio :false
          }}
          
        />
      </div>
      </div>
     
      </div>
      
    );
  }
export default BarChart;