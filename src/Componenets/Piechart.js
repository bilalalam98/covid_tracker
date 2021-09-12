import React from 'react';
import {Pie} from 'react-chartjs-2';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

 
const useStyles = makeStyles((theme) => ({
    root: {
        margin: '0 auto',
        maxWidth: 1000,
        marginTop: 50,
        
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    

}));
  
function MyPie(props) {

    console.log(props.SetCountry)
    var fetch_data=props.SetCountry;
    var data={}

    if(fetch_data !==undefined){

         data = {
            labels: [
                'Today Cases',
                'Today Deaths',
                'Today Recovered'
            ],
            datasets: [{
                data: [fetch_data.todayCases,fetch_data.todayDeaths, fetch_data.todayRecovered],
                backgroundColor: [
                '#FF6384',
                '#36A2EB',
                '#FFCE56'
                ],
                hoverBackgroundColor: [
                '#FF6384',
                '#36A2EB',
                '#FFCE56'
                ]
            }]
        };
        if(fetch_data.todayCases===0 && fetch_data.todayDeaths===0 && fetch_data.todayRecovered===0 ){
            data = {
                labels: [
                    'Today ZERO Cases',
                    'Today ZERO Deaths',
                    'Today ZERO Recovered'
                ],
                datasets: [{
                    data: [fetch_data.todayCases,fetch_data.todayDeaths, fetch_data.todayRecovered],
                    backgroundColor: [
                    '#FF6384',
                    '#36A2EB',  
                    '#FFCE56'
                    ],
                   
                }]
            };
        }
    }
    


    return (
        
        <div style={{margin: '0 auto',
        maxWidth: 1000,
        marginTop: 50,}}>  


<h2>Piechart of covid cases</h2>
<Grid item xs={12} sm={4}  >
                        <Paper elevation={3}>
                        

         
          <Pie data={data} />

                        </Paper>
                    </Grid>

                    <br/><br/><br/><br/>

        </div>
      );
}

export default MyPie;