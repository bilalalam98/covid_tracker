import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { useEffect, useState } from 'react';
import GlobalStats from './GlobalStats';
import AllCountries from './AllCountries';
import Graph from './graph';

//https://corona.lmao.ninja/v2/countries?yesterday&sort    all country
// https://corona.lmao.ninja/v2/all?yesterday     total
// 


export default function Infopanel({ currentScreen }) {



    //pehley val rakha tha map k andar phir baad me key kardia for easy in understanding code

    if (currentScreen === 0) {
        return (
            <GlobalStats />)}
    else  if (currentScreen === 1) {
        return (
            <AllCountries />)}
    else{
        return (
            <Graph />)}

}
