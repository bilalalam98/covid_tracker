import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { useEffect, useState } from 'react';

//https://corona.lmao.ninja/v2/countries?yesterday&sort    all country
// https://corona.lmao.ninja/v2/all?yesterday     total
// 
const useStyles = makeStyles((theme) => ({
    root: {
        margin: '0 auto',
        maxWidth: 1000,
        marginTop: 50
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    title: {

        color: '#3f51b5',
    

    },
    num:{

        color: 'red',

    },

}));

export default function GlobalStats() {

    const classes = useStyles();
    

    const [globalData, setGlobalData] = useState({});
    const LoadNewChanges = true;

    useEffect(() => {
        async function fetchData() {
            const response = await fetch('https://corona.lmao.ninja/v2/all?yesterday ')
            let data = await response.json();

            //abhi humarey paas sirf direct object arha hai agar results k array me ata tou hum yeh likhteyk;
            //console.log(data.results[0]);
            //and is me source agar source k name k attribute ki zaroorat na ho tou yeh karengey :
            //delete data.results[0].source;

            setGlobalData(data);
            console.log(data)

        }
        fetchData()
    }, [LoadNewChanges])


  
//pehley val rakha tha map k andar phir baad me key kardia for easy in understanding code


    return (
        <div className={classes.root}>
            <Grid container spacing={3}>

                {Object.keys(globalData).map((key,ind) => {
                   return(
                    <Grid item xs={12} sm={4} key={ind}>
                        <Paper className={classes.paper} elevation={3}>
                            <h3 className={classes.title} >{key}</h3>
                            
                            <h3  className={classes.num}>{globalData[key]}</h3>
                        </Paper>
                    </Grid>
                        )

                })}




            </Grid>
            <br/> <br/> <br/> <br/>
        </div>
    );
}
