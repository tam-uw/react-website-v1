import React from 'react';
import {Typography} from '@material-ui/core';
import '../App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import styles from '../styles.js';
import CanadaIcon from "../pictures/Canada-round.png";

function Canada() {
    const classes = styles();

    return (
        <div className={`${classes.grid}`}>
            <img src={CanadaIcon} className={classes.Normal}/>
            <Typography>
            <b>&nbsp;&nbsp;Software Engineer</b><br></br>
            &nbsp;&nbsp;<a href="https://www.canada.ca/en/environment-climate-change.html">Environment Canada</a> • Internship
            <div style={{"color": "grey"}}>
                &nbsp;&nbsp;Jul 2020 - Jun 2021 • 1 yr
            </div>
            </Typography>
        </div>

    );
}

export default Canada;