import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useEffect, useState } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import TableHead from '@material-ui/core/TableHead';
import { TableContainer } from '@material-ui/core';

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

export default function AllCountries() {

    const classes = useStyles();
    

    const [globalData, setGlobalData] = useState([{}]);
    const LoadNewChanges = true;

    useEffect(() => {
        async function fetchData() {
            const response = await fetch('https://corona.lmao.ninja/v2/countries?yesterday&sort')
            let data = await response.json();

            setGlobalData(Object.values(data));
            console.log(data[0])

        }
        fetchData()
    }, [LoadNewChanges])


  
//pehley val rakha tha map k andar phir baad me key kardia for easy in understanding code


    return (
        <div className={classes.root}>
                  <TableContainer >
                <Table >
                    <TableHead>
                        <TableRow>
                            <TableCell>COUNTRIES</TableCell>

                            <TableCell>Today Cases</TableCell>
                            <TableCell>Today Deaths</TableCell>
                            <TableCell>Today Recoverd</TableCell>
                            <TableCell>Total Recovered</TableCell>
                            <TableCell>Total Active</TableCell>
                            <TableCell>Total Cases</TableCell>

                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {globalData.map((value, index) => (

                            <TableRow key={index}>

                                <TableCell component="th" scope="row"> {value.country} </TableCell>
                                <TableCell> {value.todayCases} </TableCell>
                                <TableCell> {value.todayDeaths} </TableCell>
                                <TableCell> {value.todayRecovered} </TableCell>
                                <TableCell> {value.recovered} </TableCell>
                                <TableCell> {value.active} </TableCell>
                                <TableCell> {value.cases} </TableCell>

                            </TableRow>

                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            <br/> <br/> <br/> <br/>
        </div>
    );
}
