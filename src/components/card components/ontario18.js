import React from 'react';
import {Typography} from '@material-ui/core';
import '../App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import styles from '../styles.js';
import OntarioIcon from "../pictures/ontario-round.png";

function Ontario() {
    const classes = styles();

    return (
        <div className={`${classes.grid}`}>
            <img src={OntarioIcon} className={classes.Normal}/>
            <Typography variant="h7">
                <b>&nbsp;&nbsp;Software Engineer</b><br></br>
                &nbsp;&nbsp;<a href="https://www.ontario.ca/page/government">Ontario</a> • Internship
                <br></br>
                <div style={{"color": "grey"}}>
                    &nbsp;&nbsp;May 2018 - Aug 2018 • 4 mos<br></br>
                </div>
            </Typography>
        </div>
    );
}

export default Ontario;